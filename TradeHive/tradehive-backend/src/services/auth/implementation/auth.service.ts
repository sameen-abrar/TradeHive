import { hash, prisma } from "../../..";
import { loginRequest, registerRequest } from "../../../models/auth.model";
import { IAuthService } from "../interfaces/auth.Interface";

export class authService implements IAuthService{
    async login(input: loginRequest): Promise<number> {
        try {
            // Find the user by username
            const auth = await prisma.auth.findUnique({
              where: { email: input.email },
            });
    
            console.log('User Found:', auth);
    
            // If user is not found, throw an error
            if (!auth) {
              return -1;
            }
    
            // Compare the provided password with the stored hashed password
            const isPasswordValid = await hash.compare(input.password, auth.hashedPassword);
    
            if (!isPasswordValid) {
              return -1;
            }
    
            // Return true if both username and password are valid
            return auth.userId ?? -1;
          } catch (error) {
              if (error instanceof Error) {
                  console.error('Error in login resolver:', error.message);
                } else {
                  console.error('An unexpected error occurred:', error);
                }
                throw new Error('Login failed');
          }
    }

    async register(input: registerRequest): Promise<string | object> {
        const user = await prisma.user.create({
           data: {
            firstName: input.firstName,
            lastName: input.lastName,
            phone: input.phone,
            address: input.address,
            createdAt: new Date()
           } 
        });

        if(user != null){
            const hashedPassword: string = await hash.hash(input.password, 10);
            const auth = await prisma.auth.create({
                data:{
                    email: input.email,
                    userId: user.id,
                    password: input.password,
                    hashedPassword: hashedPassword,
                    createdAt: new Date()
                }                
            })            
            return `${auth.email} inserted successfully`; 
        }

        return "There was an error"

    }
}

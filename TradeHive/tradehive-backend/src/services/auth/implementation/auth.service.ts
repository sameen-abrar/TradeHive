import { hash, prisma } from "../../..";
import { loginRequest, registerRequest } from "../../../models/auth.model";
import { IAuth } from "../interfaces/auth.Interface";

export class authService implements IAuth{
    async login(input: loginRequest): Promise<boolean> {
        try {
            // Find the user by username
            const auth = await prisma.auth.findUnique({
              where: { userName: input.username },
            });
    
            console.log('User Found:', auth);
    
            // If user is not found, throw an error
            if (!auth) {
              return false;
            }
    
            // Compare the provided password with the stored hashed password
            const isPasswordValid = await hash.compare(input.password, auth.hashedPassword);
    
            if (!isPasswordValid) {
              return false;
            }
    
            // Return true if both username and password are valid
            return true;
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
            name: input.name,
            email: input.email,
            createdAt: new Date()
           } 
        });

        if(user != null){
            const hashedPassword: string = await hash.hash(input.password, 10);
            const auth = await prisma.auth.create({
                data:{
                    userName: input.username,
                    userId: user.id,
                    password: input.password,
                    hashedPassword: hashedPassword,
                    createdAt: new Date()
                }                
            })            
            return `${user.name} inserted successfully`; 
        }

        return "There was an error"

    }
}

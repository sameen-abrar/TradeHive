import { register } from "module";
import { authService } from "../../services/auth/implementation/auth.service";
import { IAuthService } from "../../services/auth/interfaces/auth.Interface";

const _authService: IAuthService = new authService();
export const authResolvers = {
  Query: {
    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      try {
        const response = await _authService.login({
          email: email,
          password: password,
        });
        console.log("response in resolver", response);
        return response;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in login resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("Login failed");
      }
    },
  },
  Mutation:{
    register: async (
      _: any,
      {
        firstName,
        lastName,
        email,
        address,
        phone,
        password
      }: { firstName: string; lastName: string; email: string; address: string; phone: string; password: string;  }
    ) => {
      try {
        const response = await _authService.register({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          address: address,
          password: password,
        });
        console.log("response in resolver", response);
        return response;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error in register resolver:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
        throw new Error("Registration failed");
      }
    }
  }
};

import { register } from "module";
import { authService } from "../../services/auth/implementation/auth.service";
import { IAuth } from "../../services/auth/interfaces/auth.Interface";

const _authService: IAuth = new authService();
export const authResolvers = {
  Query: {
    login: async (
      _: any,
      { username, password }: { username: string; password: string }
    ) => {
      try {
        const response = await _authService.login({
          username: username,
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
        username,
        password,
        name,
        email,
      }: { username: string; password: string; name: string; email: string }
    ) => {
      try {
        const response = await _authService.register({
          username: username,
          password: password,
          name: name,
          email: email
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

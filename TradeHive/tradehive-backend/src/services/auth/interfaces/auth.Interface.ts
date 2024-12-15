import { loginRequest, registerRequest } from "../../../models/auth.model";

export interface IAuthService {
    /**
     * Registers a new user with the provided details.
     * @param input - The user registration details.
     * @returns A promise resolving to a success message or user object.
     */
    register(input: registerRequest): Promise<string | object>;
  
    /**
     * Logs in a user by validating their credentials.
     * @param input - The user login credentials.
     * @returns A promise resolving to a boolean or a token if successful.
     */
    login(input: loginRequest): Promise<boolean>;
  }
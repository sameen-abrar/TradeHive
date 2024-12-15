export interface registerRequest {
  firstName: string;
  lastName: string;  
  phone: string
  email: string;
  address: string;
  password: string;
}

export interface loginRequest {
  email: string;
  password: string;
}

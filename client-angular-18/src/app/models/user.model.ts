export interface User {
  name?: string;
  email: string;
  password: string;
  token?: string;
}


export interface AuthPayload {
  user: User;
  token: string;
}
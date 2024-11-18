export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
    [key: string]: any; 
  }



  export interface User {
    id: number;
    name: string;
    email: string;
  }

  
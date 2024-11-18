export interface AuthResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }


  export interface RegisterResponse {
    id: string;
    name: string;
    email: string;
  }
  
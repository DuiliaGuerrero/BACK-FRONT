export interface User {
  name?: string;
  lastname?: string;
  age?: number;
  email: string;
  password: string;
  role?: string;
}

export interface Token {
  success:string
  token: string
}
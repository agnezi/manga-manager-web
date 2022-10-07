export interface LoginBody {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  accessToken: string;
  updatedAt: string;
  createdAt: string;
  id: string;
}

export type Register = {
  username: string;
  email: string;
  password: string;
};

export type Login = {
  identifier: string;
  password: string;
};

export interface CurrentUser {
  username: string;
  email: string;
}

export interface AuthState {
  currentUser: CurrentUser | null;
  isLoading: boolean;
  loginError: string | null;
  registerError: string | null;
}

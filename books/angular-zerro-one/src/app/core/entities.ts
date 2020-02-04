export interface Todo {
  objectId?: string;
  desc: string;
  completed: boolean;
  createdAt?: string;
  id?: string;
  userId?: string;
}

export interface User {
  userId: string;
  username: string;
  sessionToken?: string;
  password?: string;
}

export class Auth {
  user?: User;
  hasError: boolean;
  errMsg?: string;
  redirectUrl?: string;
}

export interface AppState {
  todos: Todo[];
  todoFilter: any;
  auth: Auth;
  count: number;
}

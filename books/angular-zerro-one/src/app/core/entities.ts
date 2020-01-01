export interface Todo {
  objectId:string;
  desc:string;
  completed:boolean;
  createdAt?:string;
  id?:string;
  userId?:string;
}

export interface User{
  id:string;
  username:string;
  password?:string;
}

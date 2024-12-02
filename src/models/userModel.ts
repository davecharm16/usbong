export interface IUser {
  username: string;
  email : string;
  password : string;
  userId : string;
  loggedIn : boolean;
  status : 'loading' | 'idle' | 'failed',
}

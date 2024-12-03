export interface IUser {
  username: string;
  email : string;
  password : string;
  userId : string;
  status : 'loading' | 'idle' | 'failed',
}

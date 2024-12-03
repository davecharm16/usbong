import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/userModel';

export interface IUserSlice {
  user : IUser
  loggedIn: boolean,
}

const initialState: IUserSlice = {
  user : {
    username: '',
    email : '',
    password : '',
    userId : '',
    status : 'idle',
  },
  loggedIn : false,
};

// export const fetchUserAsync = createAsyncThunk(
//   'user/fetchUserAsync',
//   async (fetchUser : () => Promise<IUser>) => {
//     const user = await fetchUser();
//     return user;
//   }
// );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,  action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logIn : (state) => {
      state.loggedIn = true;
    },
    logOut : (state) => {
      state.loggedIn = false;
    },
  },
});

export const { setUser, logIn, logOut } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/userModel';

export interface IUserSlice {
  user : IUser
}

const initialState: IUserSlice = {
  user : {
    username: '',
    email : '',
    password : '',
    userId : '',
    loggedIn : false,
    status : 'idle',
  },
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
      state.user.loggedIn = true;
    },
    logOut : (state) => {
      state.user.loggedIn = false;
    },
  },
});

export const { setUser, logIn, logOut } = userSlice.actions;
export default userSlice.reducer;

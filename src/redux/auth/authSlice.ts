import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  userName: null | string;
}

interface IAuth {
  user: IUser;
  isLoggedIn: boolean;
}

const initialState: IAuth = {
  user: { userName: null },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.user = { userName: null };
      state.isLoggedIn = false;
    },
    refreshUser(state) {
      const loggedUser = localStorage.getItem('user');
      if (loggedUser === null) {
        return;
      }

      state.user = JSON.parse(loggedUser);
      state.isLoggedIn = true;
    },
  },
});

export const { logIn, logOut, refreshUser } = authSlice.actions;
export const reducerAuth = authSlice.reducer;

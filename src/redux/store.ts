import { configureStore } from '@reduxjs/toolkit';
import { reducerNews } from './news/newsSlice';
import { reducerAuth } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    news: reducerNews,
    auth: reducerAuth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

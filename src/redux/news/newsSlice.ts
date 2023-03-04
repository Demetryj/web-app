import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../types/post';
import { getNews, removeNewsById } from './operations';

interface INewsState {
  posts: IPost[];
  isLoading: boolean;
  error: null | string;
  page: number;
}

const initialState: INewsState = {
  posts: [],
  isLoading: false,
  error: null,
  page: 1,
};
const isPending = (action: AnyAction) => {
  return action.type.endsWith('pending');
};

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

const newsSlise = createSlice({
  name: 'news',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts.push(...action.payload);
      })
      .addCase(removeNewsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
      .addMatcher(isPending, state => {
        state.isLoading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { changePage } = newsSlise.actions;
export const reducerNews = newsSlise.reducer;

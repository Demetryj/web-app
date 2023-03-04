import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPost } from '../../types/post';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

interface IParams {
  page: number;
  limit: number;
}

export const getNews = createAsyncThunk<
  IPost[],
  IParams,
  { rejectValue: string }
>('news/getNews', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const response = await axios.get('/posts', {
      params: { _page: page, _limit: limit },
    });

    return response.data as IPost[];
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});

export const removeNewsById = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('news/removeNewsById', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`/posts/${id}`);

    return id;
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});

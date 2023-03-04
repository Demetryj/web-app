import { FC } from 'react';
import { Stack } from '@mui/material';
import { IPost } from '../../types/post';
import { NewsItem } from '../NewsItem';

interface INewsListProps {
  posts: IPost[];
}

export const NewsList: FC<INewsListProps> = ({ posts }) => {
  return (
    <Stack component="ul" spacing={2} sx={{ mb: 3, p: 0 }}>
      {posts.map(post => (
        <NewsItem key={post.id} {...post} />
      ))}
    </Stack>
  );
};

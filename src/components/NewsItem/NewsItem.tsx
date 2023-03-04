import { FC } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IPost } from '../../types/post';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeNewsById } from '../../redux/news/operations';

export const NewsItem: FC<IPost> = ({ id, title, body }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleDelete = () => {
    dispatch(removeNewsById(id));
  };

  return (
    <Card component="li">
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textIndent: 40, textAlign: 'justify' }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="medium" color="secondary" onClick={handleDelete}>
          {t('post.deleteBtn')}
        </Button>
      </CardActions>
    </Card>
  );
};

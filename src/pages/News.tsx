import { FC, useEffect, useRef } from 'react';
import { Container, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getNews } from '../redux/news/operations';
import { changePage } from '../redux/news/newsSlice';
import { NewsList } from '../components/NewsList';

const QUERY_LIMIT_PAGES = 10;
const maxPages = 10;

const News: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, page, isLoading, error } = useAppSelector(state => state.news);

  const { t } = useTranslation();

  const isFirstRender = useRef<boolean>(true);
  const hasPosts: boolean = posts.length > 0;

  useEffect(() => {
    if (hasPosts && isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(getNews({ page, limit: QUERY_LIMIT_PAGES }));
  }, [dispatch, hasPosts, page]);

  const handleClick = () => {
    dispatch(changePage(page + 1));
  };

  return (
    <main>
      <Container maxWidth="lg" sx={{ pt: 8.5, pb: 3, minHeight: '100vh' }}>
        {hasPosts && <NewsList posts={posts} />}

        {hasPosts && page < maxPages && (
          <Button
            variant="outlined"
            disabled={isLoading}
            sx={{ display: 'block', mx: 'auto' }}
            onClick={handleClick}
          >
            {t('news.loadMoreBtn')}
          </Button>
        )}

        {error && <Typography sx={{ textAlign: 'center' }}>{error}</Typography>}
      </Container>
    </main>
  );
};

export default News;

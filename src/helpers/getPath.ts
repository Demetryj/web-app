export const getPath = (value: string): string => {
  switch (value) {
    case 'Home':
      return '/';

    case 'News':
      return 'news';

    case 'Profile':
      return 'profile';

    case 'Головна':
      return '/';

    case 'Новини':
      return 'news';

    case 'Профіль':
      return 'profile';

    default:
      return '/';
  }
};

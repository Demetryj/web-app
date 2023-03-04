export const getPath = (value: string): string => {
  switch (value) {
    case 'Home':
      return '/';

    case 'News':
      return 'news';

    case 'Profile':
      return 'profile';

    default:
      return '/';
  }
};

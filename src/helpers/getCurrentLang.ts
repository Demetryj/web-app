export const getCurrentLang = (language: string | null) => {
  if (language) {
    return language.split('').slice(0, 2).join('');
  }
  return null;
};

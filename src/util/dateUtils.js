export const formatDateLong = (value, locale = 'es-ES') => {
  const date = new Date(value);
  const formatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
  });
  return formatter.format(date);
};

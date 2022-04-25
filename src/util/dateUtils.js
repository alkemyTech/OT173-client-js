const defaultConfig = {
  dateStyle: 'long',
};

export const formatDate = (value, locale = 'es-ES', config = defaultConfig) => {
  const date = new Date(value);
  const formatter = new Intl.DateTimeFormat(locale, config);
  return formatter.format(date);
};

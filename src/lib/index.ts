const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeZone: 'UTC' });

export const formatDate = (date: Date): string => formatter.format(date);

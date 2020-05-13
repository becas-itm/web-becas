import { format } from 'date-fns';
import locale from 'date-fns/locale/es';

const COLOMBIAN_DATE_FORMAT = `d 'de' MMMM 'de' yyyy`;

export function formatDate(date) {
  if (typeof date === 'string') {
    date = new Date(
      date
        .substring(0, 10)
        .split('-')
        .map(n => parseInt(n, 10)),
    );
  }

  return format(date, COLOMBIAN_DATE_FORMAT, { locale });
}

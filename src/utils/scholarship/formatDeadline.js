import { format } from 'date-fns';
import locale from 'date-fns/locale/es';

export function formatDeadline(date) {
  console.warn('DEPRECATED, import from Deadline field instead');
  const FORMAT = `d 'de' MMMM 'de' yyyy`;
  return format(new Date(date), FORMAT, { locale });
}

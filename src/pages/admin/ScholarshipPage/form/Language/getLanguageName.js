import { LANGUAGES } from './constants';

export function getLanguageName(code) {
  switch (code) {
    case LANGUAGES.ENGLISH:
      return 'Inglés';

    case LANGUAGES.SPANISH:
      return 'Español';

    default:
      return `Otro (${code})`;
  }
}

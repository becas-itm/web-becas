import { FUNDINGS } from './constants';

export function getFundingType(type) {
  switch (type) {
    case FUNDINGS.COMPLETE:
      return 'Completo';

    case FUNDINGS.PARTIAL:
      return 'Parcial';

    default:
      return 'No disponible';
  }
}

export function getFundingType(type) {
  console.warn('DEPRECATED, import from FundingType field instead');
  switch (type) {
    case 'COMPLETE':
      return 'Completo';

    case 'PARTIAL':
      return 'Parcial';

    default:
      return 'No disponible';
  }
}

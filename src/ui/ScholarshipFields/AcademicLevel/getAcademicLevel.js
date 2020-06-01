import { LEVELS } from './constants';

export function getAcademicLevel(level) {
  switch (level) {
    case LEVELS.UNDERGRADUATE:
      return 'Pregrado';

    case LEVELS.POSTGRADUATE:
      return 'Posgrado';

    case LEVELS.BOTH:
      return 'Pregrado y posgrado';

    default:
      return 'Otros';
  }
}

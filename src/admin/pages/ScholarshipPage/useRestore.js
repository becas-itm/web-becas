import api from 'utils/api';
import { useMutation } from 'react-query';

export function useRestore(scholarshipId) {
  const url = `/publishing/scholarships/${scholarshipId}/restore/`;
  const [restore, { status }] = useMutation(() => api.post(url));
  return {
    restore,
    isRestoring: status === 'loading',
  };
}

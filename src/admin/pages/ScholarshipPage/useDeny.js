import api from 'utils/api';
import { useMutation } from 'react-query';

export function useDeny(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/deny/`;
  const [deny, denial] = useMutation(data => api.post(url, data));
  return {
    deny: reason => deny({ reason }),
    isDenying: denial.status === 'loading',
  };
}

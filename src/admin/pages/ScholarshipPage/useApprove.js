import api from 'utils/api';
import { useMutation } from 'react-query';

export function useApprove(scholarshipId) {
  const url = `/publishing/scholarships/${scholarshipId}/approve/`;
  const [approve, approval] = useMutation(() => api.post(url));
  return {
    approve,
    isApproving: approval.status === 'loading',
  };
}

import { api } from 'utils/api2';
import { useMutation } from 'react-query';

export function useApprove(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/approve/`;
  const [approve, approval] = useMutation(() => api.post(url));
  return {
    approve,
    isApproving: approval.status === 'loading',
  };
}

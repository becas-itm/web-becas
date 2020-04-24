import * as api from 'utils/api';
import { useQuery, useMutation } from 'react-query';

export function useScholarship(id) {
  const baseUrl = `/api/publishing/scholarships/${id}/`;
  const { data: scholarship, isFetching, refetch } = useQuery(baseUrl, api.get);
  return { isFetching, scholarship, refetch };
}

export function useApprove(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/approve/`;
  const [approve, approval] = useMutation(() => api.post(url));
  return {
    approve,
    isApproving: approval.status === 'loading',
  };
}

export function useDeny(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/deny/`;
  const [deny, denial] = useMutation(data => api.post(url, data));
  return {
    deny: reason => deny({ reason }),
    isDenying: denial.status === 'loading',
  };
}

export function useUpdate(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/`;
  const [update, result] = useMutation(data => api.put(url, data));
  return {
    update,
    isUpdating: result.status === 'loading',
  };
}

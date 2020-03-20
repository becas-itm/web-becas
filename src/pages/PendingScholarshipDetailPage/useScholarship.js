import * as api from 'utils/api';
import { useToggle } from 'utils/hooks';
import { useQuery, useMutation } from 'react-query';

export function useScholarship(id) {
  const baseUrl = `/api/publishing/scholarships/${id}/`;
  const { data: scholarship, isFetching } = useQuery(baseUrl, api.get, {
    refetchOnWindowFocus: false,
  });
  return { isFetching, scholarship };
}

export function useApprove(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/approve/`;
  const [isApproved, toggleApproved] = useToggle();
  const [approve, approval] = useMutation(() => api.post(url));
  return {
    isApproved,
    isApproving: approval.status === 'loading',
    approve: () => approve().then(toggleApproved),
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

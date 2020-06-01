import { api } from 'utils/api2';
import { useMutation } from 'react-query';

export function useArchive(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/archive/`;
  const [archive, archiving] = useMutation(() => api.post(url));
  return {
    archive,
    isArchiving: archiving.status === 'loading',
  };
}

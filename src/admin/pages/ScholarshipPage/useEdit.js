import api from 'utils/api';
import { useMutation } from 'react-query';

export function useEdit(scholarshipId) {
  const url = `/api/publishing/scholarships/${scholarshipId}/`;
  const [edit, result] = useMutation(data => api.put(url, data));
  return {
    edit,
    isEditing: result.status === 'loading',
  };
}

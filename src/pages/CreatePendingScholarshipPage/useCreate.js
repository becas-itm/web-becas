import * as api from 'utils/api';
import { useMutation } from 'react-query';

export function useCreate(id) {
  const url = `/api/publishing/scholarships/`;
  const [create, result] = useMutation(data => api.post(url, data));
  return {
    create,
    isCreating: result.status === 'loading',
  };
}

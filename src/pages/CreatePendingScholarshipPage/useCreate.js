import * as api from 'utils/api';
import { useMutation } from 'react-query';

export function useCreate(id) {
  const url = `/api/publishing/scholarships/`;
  const [mutate, result] = useMutation(data => api.post(url, data));
  const create = data => mutate(data).then(response => response.json());
  return {
    create,
    isCreating: result.status === 'loading',
  };
}

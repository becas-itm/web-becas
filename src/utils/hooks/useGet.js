import { get } from 'utils/api';
import { useQuery } from 'react-query';

export function useGet(queryKey, options = {}) {
  return useQuery(queryKey, get, { suspense: true, ...options });
}

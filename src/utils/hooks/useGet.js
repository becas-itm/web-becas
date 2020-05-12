import { api } from 'utils/api2';
import { useQuery } from 'react-query';

export function useGet(queryKey, options = {}) {
  return useQuery(queryKey, api.get, { suspense: true, ...options });
}

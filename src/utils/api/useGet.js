import { useQuery } from 'react-query';
import api from './api';

export function useGet(queryKey, options = {}) {
  return useQuery(queryKey, api.get, { suspense: true, ...options });
}

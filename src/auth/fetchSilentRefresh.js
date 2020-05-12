import { api } from 'utils/api2';

const HTTP_STATUS_UNAUTHORIZED = 401;

export function fetchSilentRefresh() {
  return api.post('/api/auth/refresh-token/').catch(error => {
    if (error.statusCode === HTTP_STATUS_UNAUTHORIZED) {
      return null;
    }
    return Promise.reject(error);
  });
}

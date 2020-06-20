import { api } from 'utils/api2';

const HTTP_STATUS_UNAUTHORIZED = 401;

export const REFRESH_ENDPOINT = '/api/auth/refresh-token/';

export function fetchSilentRefresh() {
  return api.post(REFRESH_ENDPOINT).catch(error => {
    if (error.statusCode === HTTP_STATUS_UNAUTHORIZED) {
      return null;
    }
    return Promise.reject(error);
  });
}

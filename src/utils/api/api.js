import axios from 'axios';
import token from 'auth/token';
import ErrorResponse from './ErrorResponse';

function loadAuthorizationHeader() {
  return token.exists ? { Authorization: `Bearer ${token.getToken()}` } : {};
}

const api = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    ...loadAuthorizationHeader(),
  };

  return config;
});

api.interceptors.response.use(
  response => response.data,
  error => {
    const response = new ErrorResponse(error);
    response.stack = error.stack;
    return Promise.reject(response);
  },
);

export default api;

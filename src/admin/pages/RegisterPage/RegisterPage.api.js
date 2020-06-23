import api from 'utils/api';

export function fetchUser(token) {
  return api.get(`/api/auth/register/${token}/`);
}

export function finishRegister({ token, ...data }) {
  return api.put(`/api/auth/register/${token}/`, data);
}

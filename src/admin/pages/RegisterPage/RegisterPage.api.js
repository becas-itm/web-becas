import api from 'utils/api';

export function fetchUser(token) {
  return api.get(`/auth/register/${token}/`);
}

export function finishRegister({ token, ...data }) {
  return api.put(`/auth/register/${token}/`, data);
}

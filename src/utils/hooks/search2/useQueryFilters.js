import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';

function useQueryFilters() {
  const location = useLocation();
  const navigate = useNavigate();

  const replace = filters =>
    navigate(stringifyFilters(filters), { replace: true });

  return {
    replace,
    filters: parseFilters(location.search),
  };
}

function parseFilters(queryFilters) {
  return qs.parse(queryFilters, { ignoreQueryPrefix: true });
}

function stringifyFilters(filters) {
  return qs.stringify(filters, {
    encode: false,
    skipNulls: true,
    addQueryPrefix: true,
    arrayFormat: 'repeat',
  });
}

export { useQueryFilters, stringifyFilters };
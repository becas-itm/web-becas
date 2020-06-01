import qs from 'qs';
import { useHistory } from 'react-router-dom';

function useQueryFilters() {
  const history = useHistory();

  const replace = filters => history.replace(stringifyFilters(filters));

  return {
    replace,
    filters: parseFilters(history.location.search),
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

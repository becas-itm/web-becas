import { useReducer, useMemo } from 'react';
import { stringifyFilters } from './useQueryFilters';

function useFilters(initialState) {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const setPage = page => dispatch({ type: 'SET_PAGE', page });
  const reset = values => dispatch({ type: 'RESET', values });
  const setTerm = term => dispatch({ type: 'SET_TERM', term });
  const setFilters = values => dispatch({ type: 'SET_FILTERS', values });

  const actions = useMemo(
    () => ({
      reset,
      setTerm,
      setPage,
      setFilters,
    }),
    [],
  );

  return {
    state,
    ...actions,
    stringify() {
      return stringifyFilters(state);
    },
  };
}

function searchReducer(state, action) {
  switch (action.type) {
    case 'SET_TERM':
      return { ...state, term: action.term, page: 1 };

    case 'SET_PAGE':
      return { ...state, page: action.page };

    case 'SET_FILTERS':
      return { ...state, ...action.values };

    case 'RESET':
      return { ...state, ...action.values, page: 1, term: '' };

    default:
      throw new Error();
  }
}

export { useFilters };

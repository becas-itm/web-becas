import api from 'utils/api';
import { useMutation } from 'react-query';

const CREATE_SCHOLARSHIP_ENDPOINT = '/api/publishing/scholarships/';

export function useCreate() {
  const [mutate, { status }] = useMutation(data =>
    api.post(CREATE_SCHOLARSHIP_ENDPOINT, data),
  );

  const createScholarship = values =>
    mutate({
      ...values,
      country: values.country?.code,
      entity: values.entity?.code,
    });

  return {
    createScholarship,
    isLoading: status === 'loading',
  };
}

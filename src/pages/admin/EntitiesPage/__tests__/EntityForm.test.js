import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { EntityForm } from '../EntityForm';

describe('EntityForm', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(<EntityForm />);
    const form = queryByTestId('EntityForm');
    expect(form).toBeInTheDocument();
    expect(form.tagName).toBe('FORM');
  });

  it('should render a submit button', () => {
    const { queryByTestId } = render(<EntityForm />);
    expect(queryByTestId('EntityForm__submitButton')).toBeInTheDocument();
  });

  it('should call `onSubmit` with form values', async () => {
    const onSubmit = jest.fn();

    const name = 'foo';
    const website = 'http://www.example.com';
    const { getByTestId } = render(<EntityForm onSubmit={onSubmit} />);

    fireEvent.change(getByTestId('EntityForm__name'), {
      target: { value: name },
    });
    fireEvent.change(getByTestId('EntityForm__website'), {
      target: { value: website },
    });

    fireEvent.click(getByTestId('EntityForm__submitButton'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({ name, website });
    });
  });

  it('should be validated', async () => {
    const { getByTestId, queryAllByText } = render(<EntityForm />);
    const button = getByTestId('EntityForm__submitButton');

    expect(queryAllByText('Campo requerido')).toHaveLength(0);

    fireEvent.click(getByTestId('EntityForm__submitButton'));

    await waitFor(() => {
      expect(queryAllByText('Campo requerido')).toHaveLength(2);
      expect(button).toBeDisabled();
    });
  });

  it('should accept initial values', () => {
    const entity = { name: 'foo', website: 'http://www.example.com' };

    const { getByTestId } = render(<EntityForm entity={entity} />);

    expect(getByTestId('EntityForm__name')).toHaveValue(entity.name);
    expect(getByTestId('EntityForm__website')).toHaveValue(entity.website);
  });
});

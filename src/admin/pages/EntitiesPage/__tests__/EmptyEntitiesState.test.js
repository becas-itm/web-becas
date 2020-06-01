import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EmptyEntitiesState } from '../EmptyEntitiesState';

describe('EmptyEntitiesState', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<EmptyEntitiesState />);
    expect(getByTestId('EmptyEntitiesState')).toBeInTheDocument();
  });

  it('should have a title', () => {
    const { queryByText } = render(<EmptyEntitiesState />);
    expect(queryByText('Entidades')).toBeInTheDocument();
    expect(queryByText('Crea una entidad para comenzar.')).toBeInTheDocument();
  });

  it('should call `onNewClick` on button click', () => {
    const onNewClick = jest.fn();
    const { getByTestId } = render(
      <EmptyEntitiesState onNewClick={onNewClick} />,
    );
    const button = getByTestId('EmptyEntitiesState__button');
    fireEvent.click(button);
    expect(onNewClick).toHaveBeenCalledTimes(1);
  });
});

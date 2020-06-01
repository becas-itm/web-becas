import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EntitiesList } from '../EntitiesList';

const ent1 = { name: 'foo', website: 'http://foo.com', code: 'foo' };
const ent2 = { name: 'bar', website: 'http://bar.com', code: 'bar' };

describe('EntitiesList', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<EntitiesList entities={[ent1]} />);
    expect(getByTestId('EntitiesList')).toBeInTheDocument();
  });

  it('should have a title', () => {
    const { queryByText } = render(<EntitiesList entities={[ent2]} />);
    expect(queryByText('Entidades')).toBeInTheDocument();
  });

  it('should render the given entities', () => {
    const { queryAllByTestId } = render(
      <EntitiesList entities={[ent1, ent2]} />,
    );

    expect(queryAllByTestId('EntityItem')).toHaveLength(2);
  });

  it('should call the `onNew` create button click', () => {
    const onNew = jest.fn();
    const { getByTestId } = render(
      <EntitiesList onNew={onNew} entities={[ent1]} />,
    );
    fireEvent.click(getByTestId('EntitiesList__createButton'));
    expect(onNew).toHaveBeenCalledTimes(1);
  });

  describe('empty state', () => {
    it('should render `EmptyEntitiesState` if no entities', () => {
      const { queryByTestId } = render(<EntitiesList />);
      expect(queryByTestId('EmptyEntitiesState')).toBeInTheDocument();
    });

    it('should call `onNew` prop on action click', () => {
      const onNew = jest.fn();
      const { getByTestId } = render(<EntitiesList onNew={onNew} />);
      fireEvent.click(getByTestId('EmptyEntitiesState__button'));
      expect(onNew).toHaveBeenCalledTimes(1);
    });
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EntityItem } from '../EntityItem';

describe('EntityItem', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(
      <EntityItem
        name="German Service"
        website="https://www.daad.de/de/"
        data-testid="EntityItem"
      />,
    );
    expect(queryByTestId('EntityItem')).toBeInTheDocument();
  });

  it('should render the entity name', () => {
    const name = 'German Service';
    const { queryByText } = render(
      <EntityItem
        name={name}
        website="https://www.daad.de/de/"
        data-testid="EntityItem"
      />,
    );
    expect(queryByText(name)).toBeInTheDocument();
  });

  it('should render entity link', () => {
    const website = 'https://www.daad.de/de/';
    const { queryByText } = render(
      <EntityItem
        name="German Service"
        website={website}
        data-testid="EntityItem"
      />,
    );
    const link = queryByText('Visitar página');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', website);
  });

  it('link should be external', () => {
    const { getByText } = render(
      <EntityItem
        name="German Service"
        website="https://www.daad.de/de/"
        data-testid="EntityItem"
      />,
    );
    const link = getByText('Visitar página');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should have an edit button', () => {
    const { queryByText } = render(
      <EntityItem
        name="German Service"
        website="https://www.daad.de/de/"
        data-testid="EntityItem"
      />,
    );
    expect(queryByText('Editar')).toBeInTheDocument();
  });

  it('should call `onEdit` on edit button click', () => {
    const onEdit = jest.fn();
    const { getByText } = render(
      <EntityItem
        name="German Service"
        website="https://www.daad.de/de/"
        data-testid="EntityItem"
        onEdit={onEdit}
      />,
    );
    fireEvent.click(getByText('Editar'));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it('should render avatar', () => {
    const { queryByTestId } = render(
      <EntityItem
        name="German Service"
        website="https://www.daad.de/de/"
        data-testid="EntityItem"
      />,
    );
    expect(queryByTestId('EntityItem__Avatar')).toBeInTheDocument();
  });
});

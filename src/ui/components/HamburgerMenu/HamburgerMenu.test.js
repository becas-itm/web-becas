import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Menu, { MenuItem as BaseMenuItem, MenuButton } from './index';

const MenuItem = props => (
  <MemoryRouter>
    <BaseMenuItem {...props} />
  </MemoryRouter>
);

describe('Hamburger Menu', () => {
  const menuId = 'HamburgerMenu';

  it('should not render when closed', () => {
    const { queryByTestId } = render(<Menu isOpen={false} />);
    expect(queryByTestId(menuId)).not.toBeInTheDocument();
  });

  it("should render if it's open", () => {
    const { queryByTestId } = render(<Menu isOpen />);
    expect(queryByTestId(menuId)).toBeInTheDocument();
  });

  it('should not render children when closed', () => {
    const text = 'Foo';
    const { queryByText } = render(<Menu isOpen={false}>{text}</Menu>);
    expect(queryByText(text)).not.toBeInTheDocument();
  });

  it('should render children when open', () => {
    const text = 'Bar';
    const { queryByText } = render(<Menu isOpen>{text}</Menu>);
    expect(queryByText(text)).toBeInTheDocument();
  });

  it('should be closed by default', () => {
    const { queryByTestId } = render(<Menu />);
    expect(queryByTestId(menuId)).not.toBeInTheDocument();
  });
});

describe('Menu Button', () => {
  const buttonId = 'HamburgerMenu__Button';

  it('should render correctly', () => {
    const { queryByTestId } = render(<MenuButton />);
    expect(queryByTestId(buttonId)).toBeInTheDocument();
  });

  test('menu content', () => {
    const { getByTestId } = render(<MenuButton />);
    expect(getByTestId(buttonId)).toHaveTextContent('Abrir menú');
  });

  it('should call `onClick` on button click', () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<MenuButton onClick={onClickSpy} />);

    const button = getByTestId(buttonId);
    fireEvent.click(button);

    expect(onClickSpy).toHaveBeenCalled();
  });
});

describe('Menu Item', () => {
  it('should render correctly', () => {
    const { container } = render(<MenuItem to="#" />);
    const item = container.firstChild;
    expect(item).toBeInTheDocument();
    expect(item.tagName).toBe('A');
  });

  it('should render children', () => {
    const text = 'bar';
    const { container } = render(<MenuItem to="#">{text}</MenuItem>);
    expect(container.firstChild).toHaveTextContent(text);
  });
});

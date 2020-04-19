import React from 'react';
import { render } from '@testing-library/react';
import { IconButton, SHAPE } from './index';

const buttonId = 'IconButton';

const TestIcon = () => <div data-testid="IconButton__Icon" />;

const TestIconButton = ({ children, ...restProps }) => (
  <IconButton data-testid={buttonId} icon={TestIcon} {...restProps}>
    {children || 'Test'}
  </IconButton>
);

describe('IconButton', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(<TestIconButton />);
    expect(queryByTestId(buttonId)).toBeInTheDocument();
  });

  it('should render a button element', () => {
    const { getByTestId } = render(<TestIconButton />);
    expect(getByTestId(buttonId).tagName).toBe('BUTTON');
  });

  it('should have a `button` prop type by default', () => {
    const { getByTestId } = render(<TestIconButton />);
    expect(getByTestId(buttonId)).toHaveAttribute('type', 'button');
  });
});

describe('text children', () => {
  it('should render children text', () => {
    const text = 'Foo';
    const { queryByText } = render(<TestIconButton>{text}</TestIconButton>);
    expect(queryByText(text)).toBeInTheDocument();
  });

  it('should be visually hidden', () => {
    const text = 'Bar';
    const { getByText } = render(<TestIconButton>{text}</TestIconButton>);
    expect(getByText(text)).toHaveClass('sr-only');
  });
});

describe('Icon', () => {
  it('should render a given icon', () => {
    const { queryByTestId } = render(<TestIconButton icon={TestIcon} />);
    expect(queryByTestId('IconButton__Icon')).toBeInTheDocument();
  });
});

test('className prop is merged', () => {
  const { getByTestId } = render(<TestIconButton className="test" />);
  expect(getByTestId(buttonId)).toHaveClass('test');
});

describe('button shape', () => {
  it('should be rounded by default', () => {
    const { getByTestId } = render(
      <IconButton data-testid="icon-button" icon={TestIcon}>
        Foo
      </IconButton>,
    );
    expect(getByTestId('icon-button')).toHaveClass(SHAPE.rounded);
  });

  test('square shape', () => {
    const { getByTestId } = render(
      <IconButton
        shape={SHAPE.square}
        data-testid="icon-button"
        icon={TestIcon}
      >
        Foo
      </IconButton>,
    );
    expect(getByTestId('icon-button')).toHaveClass(SHAPE.square);
  });

  test('simple shape', () => {
    const { getByTestId } = render(
      <IconButton
        shape={SHAPE.simple}
        data-testid="icon-button"
        icon={TestIcon}
      >
        Foo
      </IconButton>,
    );
    expect(getByTestId('icon-button')).toHaveClass(SHAPE.simple);
  });
});

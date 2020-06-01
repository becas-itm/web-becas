import React from 'react';
import { render } from '@testing-library/react';
import Avatar, { SIZE } from '../index';
import fixtureImg from './fixture.png';

const STUB_FILENAME = 'http://localhost/fixture.png';

test('should render component', () => {
  const { getByTestId } = render(<Avatar src={fixtureImg} />);
  expect(getByTestId('Avatar')).toBeInTheDocument();
});

describe('image avatar', () => {
  it('should render a given image', () => {
    const { getByAltText } = render(
      <Avatar src={fixtureImg} alt="avatar-img" />,
    );
    const image = getByAltText('avatar-img');
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(STUB_FILENAME);
    expect(image.tagName).toBe('IMG');
  });
});

describe('size prop', () => {
  it('regular size is 48px', () => {
    const { getByTestId } = render(
      <Avatar size={SIZE.regular} src={fixtureImg} />,
    );
    const avatar = getByTestId('Avatar');
    expect(avatar).toHaveStyle(`width: 48px`);
    expect(avatar).toHaveStyle(`height: 48px`);
  });

  it('large size is 96px', () => {
    const { getByTestId } = render(
      <Avatar size={SIZE.large} src={fixtureImg} />,
    );
    const avatar = getByTestId('Avatar');
    expect(avatar).toHaveStyle(`width: 96px`);
    expect(avatar).toHaveStyle(`height: 96px`);
  });

  it('extraLarge size is 128px', () => {
    const { getByTestId } = render(
      <Avatar size={SIZE.extraLarge} src={fixtureImg} />,
    );
    const avatar = getByTestId('Avatar');
    expect(avatar).toHaveStyle(`width: 128px`);
    expect(avatar).toHaveStyle(`height: 128px`);
  });

  it('default size should be regular', () => {
    const { getByTestId } = render(<Avatar src={fixtureImg} />);
    const avatar = getByTestId('Avatar');
    expect(avatar).toHaveStyle(`width: ${SIZE.regular}px`);
    expect(avatar).toHaveStyle(`height: ${SIZE.regular}px`);
  });
});

describe('name initials', () => {
  const renderInitials = name => {
    const result = render(<Avatar name={name} />);
    return {
      ...result,
      initialsNode: result.queryByTestId('Avatar__initials'),
    };
  };

  it('should render the name initials', () => {
    const { initialsNode } = renderInitials('foo');
    expect(initialsNode).toBeInTheDocument();
  });

  it.each([
    ['bar', 'B'],
    ['john doe', 'JD'],
    ['john doe bar', 'JD'],
    ['', '✷'],
  ])('initial name `%s` should be `%s`', (fullName, initials) => {
    const { initialsNode } = renderInitials(fullName);
    expect(initialsNode.textContent).toBe(initials);
  });

  it('should have the given name as title', () => {
    const name = 'Jane Doe';
    const { initialsNode } = renderInitials(name);
    expect(initialsNode).toHaveAttribute('title', name);
  });
});

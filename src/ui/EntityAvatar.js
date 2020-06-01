import React from 'react';
import Avatar from 'ui/Avatar';

export default function EntityAvatar({ name, ...restProps }) {
  const url = `/img/entities/${name}.jpg`;
  return <Avatar {...restProps} src={url} />;
}
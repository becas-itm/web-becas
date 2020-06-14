import React from 'react';
import Avatar from 'ui/Avatar';

export default function EntityAvatar({ code, name, ...restProps }) {
  const url = `/img/entities/${code}.jpg`;
  // TODO: add url and name support
  return <Avatar {...restProps} name={name} src={url} />;
}

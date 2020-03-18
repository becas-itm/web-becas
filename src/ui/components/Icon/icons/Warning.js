import React from 'react';
import Icon from '../Icon';

export function Warning(props) {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </Icon>
  );
}

Warning.defaultProps = Icon.defaultProps;

Warning.propTypes = Icon.propTypes;

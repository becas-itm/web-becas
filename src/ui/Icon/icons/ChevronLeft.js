import React from 'react';
import Icon from '../Icon';

export function ChevronLeft(props) {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  );
}

ChevronLeft.defaultProps = Icon.defaultProps;

ChevronLeft.propTypes = Icon.propTypes;

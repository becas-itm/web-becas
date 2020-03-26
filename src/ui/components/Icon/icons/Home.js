import React from 'react';
import Icon from '../Icon';

export function Home(props) {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  );
}

Home.defaultProps = Icon.defaultProps;

Home.propTypes = Icon.propTypes;

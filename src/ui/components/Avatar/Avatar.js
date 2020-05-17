/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import propTypes from 'prop-types';

export const SIZE = Object.freeze({
  regular: 48,
  large: 96,
  extraLarge: 128,
});

function Avatar({ name, size, style, className, src, alt, ...restProps }) {
  return (
    <div
      {...restProps}
      style={{ ...style, width: size, height: size }}
      className={`inline-block rounded-full overflow-hidden flex-shrink-0 shadow-outline ${className}`}
    >
      {name || !src ? (
        <div
          title={name || 'Anónimo'}
          className="w-full h-full text-white tracking-wide text-center flex items-center justify-center select-none"
          data-testid="Avatar__initials"
          style={{ background: '#4285f4', fontSize: (size / 16) * 6 }}
        >
          {calcNameInitials(name)}
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full object-cover bg-white" />
      )}
    </div>
  );
}

function calcNameInitials(name) {
  if (!name) {
    return '✷';
  }

  return name
    .split(/(\s)+/)
    .filter(string => string.trim())
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
}

Avatar.defaultProps = {
  alt: '',
  style: {},
  size: SIZE.regular,
  'data-testid': 'Avatar',
  className: '',
};

Avatar.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  size: propTypes.number,
  name: propTypes.string,
};

export default Avatar;

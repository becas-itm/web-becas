import React from 'react';

export default function Card({ className, ...restProps }) {
  return (
    <div
      className={` bg-white rounded
      ${className || ''}`}
      {...restProps}
    />
  );
}

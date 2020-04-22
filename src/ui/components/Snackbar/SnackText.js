import React, { forwardRef } from 'react';

export const SnackText = forwardRef(function SnackText(
  { isMultiline, children },
  ref,
) {
  const styles = {
    lineHeight: '100%',
    wordBreak: 'break-word',
  };

  if (isMultiline) {
    Object.assign(styles, {
      marginTop: '1rem',
      marginBottom: '1rem',
      whiteSpace: 'normal',
    });
  }

  return (
    <div
      ref={ref}
      style={styles}
      className="flex-1 ml-4 mr-2 break-words text-white"
    >
      {children}
    </div>
  );
});

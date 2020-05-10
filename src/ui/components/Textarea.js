import React from 'react';
import classNames from 'classnames';

const Textarea = React.forwardRef(({ className, ...restProps }, ref) => {
  const styles = classNames(
    'w-full px-3 py-2 rounded-sm border',
    restProps.readOnly || restProps.disabled
      ? 'bg-gray-100'
      : 'bg-white focus:outline-none focus:border-primary',
    restProps.disabled && 'cursor-not-allowed',
    className,
  );
  return <textarea {...restProps} ref={ref} className={styles} />;
});

export default Textarea;

import React from 'react';
import clsx from 'clsx';

import './style.css';

const Button = ({ className, ...props }) => {
  const classes = clsx(
    'button',
    className,
  );

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

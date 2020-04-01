import React from 'react';
import clsx from 'clsx';

// Styles
import './style.css';

const Button = ({ className, ...props }) => {
  const classes = clsx(
    'ls_button',
    className,
  );

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

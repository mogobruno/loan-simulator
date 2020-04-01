import React from 'react';
import clsx from 'clsx';

// Styles
import './style.css';

function Input({ label, className, id, ...props }) {
    const classes = clsx('ls_input', className);
    return <input className={classes} id={id} {...props} />;
}

export default Input;

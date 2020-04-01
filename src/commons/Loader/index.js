import React from 'react';
import clsx from 'clsx';

// Styles
import './style.css';

function Loader({ className, ...props }) {
    const classes = clsx('ls_circle', className)
    return (
        <div className={classes} {...props}><div><p>€</p></div></div>
    );
}

export default Loader;

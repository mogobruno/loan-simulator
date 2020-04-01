import React from 'react';
import clsx from 'clsx';

// Styles
import './style.css';

function Loader({ className, ...props }) {
    const classes = clsx('lds-circle', className)
    return (
        <div class={classes} {...props}><div><p>€</p></div></div>
    );
}

export default Loader;

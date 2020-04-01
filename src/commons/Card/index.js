import React from 'react';
import clsx from 'clsx';

// Styles
import './style.css';

function Card({ className, children, ...props }) {
    const classes = clsx('ls_card', className)
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}

export default Card;

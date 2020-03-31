import React from 'react';
import './style.css';

function Card({ children }) {
    return (
        <div class="card">
            {children}
        </div>
    );
}

export default Card;

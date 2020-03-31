import React from 'react';
import './style.css';

function Header({ logo, name }) {
    const removeLogo = (event) => {
        event.target.style.display = 'none';
    };
    return (
        <nav className="header">
            <div className="header_logo">
                <img className="header_logo_img" src={logo} alt="header logo" onError={removeLogo} />
                <span className="header_logo_name">{name}</span>
            </div> 
        </nav>
    );
}

export default Header;

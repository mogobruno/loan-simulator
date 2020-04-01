import React from 'react';

// Styles
import './style.css';

function Header({ logo, name, user }) {
    const removeLogo = (event) => {
        event.target.style.display = 'none';
    };
    return (
        <nav className="header">
            <div className="header_logo">
                <img className="header_logo_img" src={logo} alt="header logo" onError={removeLogo} />
                <span className="header_logo_name">{name}</span>
            </div>
            <div className="header_user">
                {user}
            </div>
        </nav>
    );
}

export default Header;

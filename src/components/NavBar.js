import React from 'react';

import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    
    signOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-wrapper">
                    <div className="branding">
                        <strong>Foodie Fun</strong>
                    </div>
                    <div className="links">
                        <NavLink
                            className="link"
                            to="/private"
                        >
                            <i className="fas fa-home"/>
                        </NavLink>
                        <NavLink
                            className="link"
                            to="/add-post"
                        >
                            <i className="fas fa-plus"/>
                        </NavLink>
                        <button
                            className="logout"
                            onClick={this.signOut}
                        >
                            <i className="fas fa-sign-out-alt"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

// Styled Components

const NavigationBar = styled.nav`
    background: lightblue;
    height: 60px;
`

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    height: 100%;
    margin: auto;
    padding: 0 1rem;
    background: white;
`

const Branding = styled.div`
    font-size: 2rem;
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;

    .link {
        text-decoration: none;
        color: black;
    }

    .fas {
        font-size: 1.5rem;
    }
`

const SignOutButton = styled.button`
    border: none;
    background: none;
`

// NavBar Component Constructor

class NavBar extends React.Component {
    
    signOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    render() {
        return (
            <NavigationBar>
                <NavWrapper>
                    <Branding>
                        <strong>Foodie Fun</strong>
                    </Branding>
                    <Links>
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
                        <SignOutButton
                            className="logout"
                            onClick={this.signOut}
                        >
                            <i className="fas fa-sign-out-alt"/>
                        </SignOutButton>
                    </Links>
                </NavWrapper>
            </NavigationBar>
        )
    }
}

export default NavBar;
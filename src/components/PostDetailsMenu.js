import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

// Styled Components

const PostMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    height: 200px;
    margin: 45% auto;
    background: white;

    @media(max-width: 500px) {
        max-width: 250px;
        height: 150px;
    }
`

const MenuButton = styled.button`
    height: 50%;
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;

    :nth-child(even) {
        border-top: 1px solid lightgrey;
    }

    &:hover {
        background: lightgrey;
        transition: all 200ms ease;
    }
`

// PostDetailsMenu Component Constructor

const PostDetailsMenu = props => {
    return (
        <PostMenu>
            <MenuButton onClick={props.openEditForm}>Edit Post</MenuButton>
            <MenuButton onClick={props.deletePost}>Delete Post</MenuButton>
        </PostMenu>
    )
}

export default onClickOutside(PostDetailsMenu);
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Import Components

import PostThumbnail from './PostThumbnail';

// Styled Components

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
`

// PostList Component Constructor

const PostList = props => {
    return (
        <PostListWrapper>
            {props.data.map(item => (
                <Link to={`/post-details/${item.id}`} key={item.id}>
                    <PostThumbnail
                        id={item.id}
                        item_photo={item.item_photo}
                        item_name={item.item_name}
                    />
                </Link>
            ))}
        </PostListWrapper>
    )
}

export default PostList;
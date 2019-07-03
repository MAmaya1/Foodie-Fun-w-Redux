import React from 'react';
import styled from 'styled-components';

// Styled Components

const Thumbnail = styled.div`
    width: 98%;
    height: 98%;
    overflow: hidden;
    margin: 0 auto;
`

const ThumbnailImg = styled.img`
    width: 100%;
`

const PostThumbnail = props => {
    return (
        <Thumbnail>
            <ThumbnailImg src={props.item_photo} alt={`${props.item_name}`}/>
        </Thumbnail>
    )
}

export default PostThumbnail;
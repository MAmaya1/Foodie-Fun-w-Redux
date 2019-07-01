import React from 'react';

const Post = props => {
    return (
        <div className="post-card">
            <img src={props.item_photo} alt={`${props.item_name}`}/>
        </div>
    )
}

export default Post;
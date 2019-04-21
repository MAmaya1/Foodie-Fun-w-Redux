import React from 'react';

const Post = props => {
    return (
        <div className="post-card">
            <h3>{props.restaurant_name}</h3>
            <p>{props.restaurant_type}</p>
            <p>Order: {props.item_name}</p>
            <img src={props.item_photo} alt={`${props.item_name}`}/>
        </div>
    )
}

export default Post;
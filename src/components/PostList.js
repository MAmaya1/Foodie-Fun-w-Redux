import React from 'react';

import Post from './Post';

const PostList = props => {
    return (
        <div>
            {props.data.map(item => (
                <Post
                    key={item.id}
                    id={item.id}
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_name={item.item_name}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                    wait_time={item.wait_time}
                    item_comment={item.item_comment}
                />
            ))}
        </div>
    )
}

export default PostList;
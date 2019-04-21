import React from 'react';
import {Link} from 'react-router-dom';

import Post from './Post';

const PostList = props => {
    return (
        <div>
            {props.data.map(item => (
                <Link to={`/post-details/${item.id}`} key={item.id}><Post
                    id={item.id}
                    restaurant_name={item.restaurant_name}
                    restaurant_type={item.restaurant_type}
                    item_name={item.item_name}
                    item_photo={item.item_photo}
                    food_rating={item.food_rating}
                    wait_time={item.wait_time}
                    item_comment={item.item_comment}
                /></Link>
            ))}
        </div>
    )
}

export default PostList;
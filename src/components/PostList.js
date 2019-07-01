import React from 'react';
import {Link} from 'react-router-dom';

import Post from './Post';

const PostList = props => {
    return (
        <div>
            {props.data.map(item => (
                <Link to={`/post-details/${item.id}`} key={item.id}>
                    <Post
                        id={item.id}
                        item_photo={item.item_photo}
                    />
                </Link>
            ))}
        </div>
    )
}

export default PostList;
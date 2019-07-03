import React from 'react';
import {Link} from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

const PostDetailsMenu = props => {
    return (
        <div>
            {/* <Link to={`/post-details/edit-post/${props.post.id}`}> */}
                <button onClick={props.openEditForm}>Edit Post</button>
            {/* </Link> */}
            <button onClick={props.deletePost}>Delete</button>
        </div>
    )
}

export default onClickOutside(PostDetailsMenu);
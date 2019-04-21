import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const PostDetails = props => {
    const post = props.data.find(post => {
        return `${post.id}` === props.match.params.id;
    })

    return (
        <div>
            <h3>{post.restaurant_name}</h3>
            <p>{post.restaurant_type}</p>
            <p>{post.item_name}</p>
            <img src={post.item_photo} alt={post.item_name}/>
            <p>{post.food_rating}</p>
            <p>{post.wait_time}</p>
            <p>{post.item_comment}</p>
            <Link to={`/edit-post/${post.id}`}>
                <button>Edit Post</button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, {})(PostDetails);
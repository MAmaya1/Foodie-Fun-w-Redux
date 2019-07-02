import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';

import {deletePost} from '../actions';

class PostDetails extends React.Component {
    constructor(props) {
        super();
        this.post = props.data.find(post => {
            return `${post.id}` === props.match.params.id;
        })
    }

    deletePost = event => {
        event.preventDefault();
        const id = this.post.id;
        this.props.deletePost(id)
            .then(() => {
                this.props.history.push('/private');
            })
    }
    
   render() {
        return (
            <div>
                <h3>{this.post.restaurant_name}</h3>
                <p>{this.post.restaurant_type}</p>
                <p><strong>Date Visited: </strong>{moment(this.post.date_visited).format('LL')}</p>
                <p><strong>Item name: </strong>{this.post.item_name}</p>
                <img src={this.post.item_photo} alt={this.post.item_name}/>
                <p><strong>Rating: </strong>{this.post.food_rating}</p>
                <p><strong>Wait Time: </strong>{this.post.wait_time}</p>
                <p><strong>Comments: </strong>{this.post.item_comment}</p>
                <Link to={`/edit-post/${this.post.id}`}>
                    <button>Edit Post</button>
                </Link>
                <button onClick={this.deletePost}>Delete</button>
            </div>
        )
   }
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, {deletePost})(PostDetails);
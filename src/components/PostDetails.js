import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

// Import Components

import PostDetailsMenu from './PostDetailsMenu';

// Import Actions

import {deletePost} from '../actions';
import EditPost from './EditPost';

// Styled Components

const PostPage = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 1rem;
    background: white;

    h3 {
        margin: 0;
    }

    .inline {
        display: inline-block;
        margin: 20px 0 0 0;
    }

    .good-rating {
        color: #008000;
        font-weight: bold;
    }

    .bad-rating {
        color: #ff0000;
        font-weight: bold;
    }
`

const PostImage = styled.img`
    width: 100%;
`

// PostDetails Component Constructor

class PostDetails extends React.Component {
    constructor(props) {
        super();
            this.state = {
                menuOpen: false,
                editFormOpen: false
            }
            this.post = props.data.find(post => {
                return `${post.id}` === props.match.params.id;
            })
    }

    openMenu = event => {
        event.preventDefault();
        this.setState({
            menuOpen: true
        })
    }

    openEditForm = event => {
        event.preventDefault();
        this.setState({
            menuOpen: false,
            editFormOpen: true
        })
    }

    handleClickOutside = () => {
        this.setState({
            menuOpen: false,
            editFormOpen: false
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
            <PostPage>
                <h3>{this.post.restaurant_name}</h3>
                <p>{this.post.restaurant_type}</p>
                <p><strong>Date Visited: </strong>{moment(this.post.date_visited).format('LL')}</p>
                <p><strong>Order: </strong>{this.post.item_name}</p>
                <PostImage src={this.post.item_photo} alt={this.post.item_name}/>
                <p className="inline">
                    <strong>Rating (1 to 5): </strong>
                </p>{" "}
                <p className={`inline ${this.post.food_rating >= 3 ? "good-rating" : "bad-rating"}`}>
                    {this.post.food_rating}
                </p>
                <p><strong>Wait Time: </strong>{this.post.wait_time}</p>
                <p><strong>Comments: </strong>{this.post.item_comment}</p>
                <button onClick={this.openMenu}>Open</button>
                
                {this.state.menuOpen && (
                    <PostDetailsMenu
                        post={this.post}
                        openEditForm={this.openEditForm}
                        handleClickOutside={this.handleClickOutside}
                        deletePost={this.deletePost}
                    />
                )}
                {this.state.editFormOpen && (
                    <EditPost
                        post={this.post}
                        handleClickOutside={this.handleClickOutside}
                    />
                )}
            </PostPage>
        )
   }
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, {deletePost})(PostDetails);
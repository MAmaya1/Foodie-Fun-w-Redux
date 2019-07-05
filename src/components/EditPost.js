import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

// Import Actions

import {editPost} from '../actions';

// Styled Components

const EditPostContainer = styled.div`
    max-width: 400px;
    margin: 10% auto;
    padding: 1rem 1.5rem;
    background: white;

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }

    .error-message {
        color: red;
    }

    @media(max-width: 500px) {
        max-width: 250px;
        margin-top: 5%;

        h2 {
            font-size: 1.2rem;
        }

        .error-message {
            font-size: 0.8rem;
            margin-bottom: 0;
        }
    }
`

const EditPostForm = styled.form`
    display: flex;
    flex-direction: column;

    label {
        margin: 10px 0 5px 0;
        font-size: 1rem;
    }

    input {
        height: 30px;
        width: 100%;
        backround: white;
        border: 2px solid grey;
    }

    @media (max-width: 500px) {
        label {
            margin-top: 5px;
            font-size: 0.8rem;
        }

        input {
            height: 25px;
        }
    }
`

const SaveButton = styled.button`
    margin: 20px auto auto auto;
    height: 30px;
    width: 90px;

    @media(max-width: 500px) {
        margin-top: 15px;
    }
`

// EditPost Component Constructor

class EditPost extends React.Component {
    state = {
        restaurant_name: "",
        restaurant_type: "",
        date_visited: "",
        item_name: "",
        item_photo: "",
        food_rating: 0,
        wait_time: "",
        item_comment: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updatePost = event => {
        event.preventDefault();
        const id = this.props.post.id;
        const meal = {
            ...this.state,
            food_rating: parseInt(this.state.food_rating)
        }
        this.props.editPost(id, meal);
    }

    render() {
        if (this.props.editSuccess) {
            return <Redirect to="/private"/>
        }
        return (
            <EditPostContainer>
                <h2>Update Post</h2>
                <EditPostForm>
                    <label htmlFor="restaurant_name">Restaurant Name</label>
                    <input
                        id="restaurant_name"
                        type="text"
                        name="restaurant_name"
                        value={this.state.restaurant_name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="restaurant_type">Restaurant Type</label>
                    <input
                        id="restaurant_type"
                        type="text"
                        name="restaurant_type"
                        value={this.state.restaurant_type}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="date_visited">Date Visited</label>
                    <input
                        id="date_visited"
                        type="date"
                        name="date_visited"
                        value={this.state.date_visited}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="item_name">Item Ordered</label>
                    <input
                        id="item_name"
                        type="text"
                        name="item_name"
                        value={this.state.item_name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="item_photo">Image URL</label>
                    <input
                        id="item_photo"
                        type="text"
                        name="item_photo"
                        value={this.state.item_photo}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="food_rating">Rating (1 to 5)</label>
                    <input
                        id="food_rating"
                        type="text"
                        name="food_rating"
                        value={this.state.food_rating}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="wait_time">Wait Time</label>
                    <input
                        id="wait_time"
                        type="text"
                        name="wait_time"
                        value={this.state.wait_time}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="item_comment">Comment</label>
                    <input
                        id="item_comment"
                        type="text"
                        name="item_comment"
                        value={this.state.item_comment}
                        onChange={this.handleChange}
                    />
                    <SaveButton type="submit" onClick={this.updatePost}>
                        {this.props.editingPost ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : ('Save')}
                    </SaveButton>
                </EditPostForm>
                {this.props.editFailure && (
                    <p className="error-message">{this.props.editFailure}</p>
                )}
            </EditPostContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        editingPost: state.editingPost,
        editSuccess: state.editPostSuccess,
        editFailure: state.editFailure
    }
}

export default connect(mapStateToProps, {editPost})(onClickOutside(EditPost));
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import onClickOutside from 'react-onclickoutside';

import {editPost} from '../actions';

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
            <div className="update-post">
                <h2>Update Post</h2>
                <form>
                    <label htmlFor="restaurant_name"/>
                    <input
                        id="restaurant_name"
                        type="text"
                        name="restaurant_name"
                        value={this.state.restaurant_name}
                        placeholder="Restaurant Name:"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="restaurant_type"/>
                    <input
                        id="restaurant-type"
                        type="text"
                        name="restaurant_type"
                        value={this.state.restaurant_type}
                        placeholder="Restaurant Type:"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="date_visited"/>
                    <input
                        id="date_visited"
                        type="date"
                        name="date_visited"
                        value={this.state.date_visited}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="item_name"/>
                    <input
                        id="item_name"
                        type="text"
                        name="item_name"
                        value={this.state.item_name}
                        placeholder="Item Name (required): "
                        onChange={this.handleChange}
                    />
                    <label htmlFor="item_photo"/>
                    <input
                        id="item_photo"
                        type="text"
                        name="item_photo"
                        value={this.state.item_photo}
                        placeholder="Image url:"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="food_rating"/>
                    <input
                        id="food_rating"
                        type="text"
                        name="food_rating"
                        value={this.state.food_rating}
                        placeholder="Rating:"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="wait_time"/>
                    <input
                        id="wait_time"
                        type="text"
                        name="wait_time"
                        value={this.state.wait_time}
                        placeholder="Wait Time:"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="item_comment"/>
                    <input
                        id="item_comment"
                        type="text"
                        name="item_comment"
                        value={this.state.item_comment}
                        placeholder="Comment:"
                        onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.updatePost}>
                        {this.props.editingPost ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : ('Save')}
                    </button>
                </form>
                {this.props.editFailure && (
                    <p>{this.props.editFailure}</p>
                )}
            </div>
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
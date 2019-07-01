import React from 'react';
import {connect} from 'react-redux';

import {editPost} from '../actions';

class EditPost extends React.Component {
    state = {
        restaurant_name: "",
        restaurant_type: "",
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
        const id = this.props.match.params.id;
        const meal = {
            ...this.state,
            food_rating: parseInt(this.state.food_rating)
        }
        this.props.editPost(id, meal)
            .then(() => {
                this.props.history.push(`/private`);
            })
    }

    render() {
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
                        Save
                    </button>
                </form>
                {this.props.editSuccess && (
                    <p>Item added successfully!</p>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        editSuccess: state.editSuccess
    }
}

export default connect(mapStateToProps, {editPost})(EditPost);
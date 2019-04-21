import React from 'react';

class EditPost extends React.Component {
    state = {
        restaurant_name: "",
        restaurant_type: "",
        item_name: "",
        item_photo: "",
        food_rating: null,
        wait_time: "",
        item_comment: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="update-post">
                <h2>Update Post</h2>
                <form>
                <input
                    type="text"
                    name="restaurant_name"
                    onChange={this.handleChange}
                    placeholder="Restaurant Name:"
                />
                <input
                    type="text"
                    name="restaurant_type"
                    onChange={this.handleChange}
                    placeholder="Restaurant Type:"
                />
                <input
                    type="text"
                    name="item_name"
                    onChange={this.handleChange}
                    placeholder="Item Name (Required): "
                />
                <input
                    type="text"
                    name="item_photo"
                    onChange={this.handleChange}
                    placeholder="Image url:"
                />
                <input
                    type="text"
                    name="food_rating"
                    onChange={this.handleChange}
                    placeholder="Rating:"
                />
                <input
                    type="text"
                    name="wait_time"
                    onChange={this.handleChange}
                    placeholder="Wait Time:"
                />
                <input
                    className="addPost"
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.item_comment}
                    placeholder="Comment:"
                    name="item_comment"
                />
                <button type="submit" onClick={this.updatePost} className="btn">
                    Save
                </button>
                </form>
            </div>
        )
    }
}

export default EditPost;
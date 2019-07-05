import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

// Import Components

import PostDetailsMenu from './PostDetailsMenu';
import EditPost from './EditPost';

// Import Actions

import {deletePost} from '../actions';

// Styled Components

const PostPage = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 1rem;
    background: white;
    position: relative;

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

const ImgContainer = styled.div`
    text-align: center;
`

const PostImage = styled.img`
    width: 80%;
    margin: auto;

    @media(max-width: 500px) {
        width: 100%;
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const OpenEllipsis = styled.button`
    height: 50px;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
`

const MenuDiv = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    text-align: center;

    @media(max-width: 500px) {
        padding: 1rem 2rem;
    }
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

// Opens Post Details Menu

    openMenu = event => {
        event.preventDefault();
        this.setState({
            menuOpen: true
        })
    }

// Opens Edit Post Form

    openEditForm = event => {
        event.preventDefault();
        this.setState({
            menuOpen: false,
            editFormOpen: true
        })
    }

// Closes Post Details Menu and Edit Post Form On Outside Click

    handleClickOutside = () => {
        this.setState({
            menuOpen: false,
            editFormOpen: false
        })
    }

// Deletes Post

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
                <ImgContainer>
                    <PostImage src={this.post.item_photo} alt={this.post.item_name}/>
                </ImgContainer>
                
            {/* Bottom of Post Details Flex Container */}

                <FlexContainer>
                    <div>
                        <p className="inline">
                            <strong>Rating (1 to 5): </strong>
                        </p>{" "}
                        <p className={`inline ${this.post.food_rating >= 3 ? "good-rating" : "bad-rating"}`}>
                            {this.post.food_rating}
                        </p>
                        <p><strong>Wait Time: </strong>{this.post.wait_time}</p>
                        <p><strong>Comments: </strong>{this.post.item_comment}</p>
                    </div>
                    <OpenEllipsis onClick={this.openMenu}><i className="fas fa-ellipsis-v"/></OpenEllipsis>
                </FlexContainer>

            {/* Pop Up Menu */}
            
                    {this.state.menuOpen && (
                        <MenuDiv>
                        <PostDetailsMenu
                            post={this.post}
                            openEditForm={this.openEditForm}
                            handleClickOutside={this.handleClickOutside}
                            deletePost={this.deletePost}
                        />
                        </MenuDiv>
                    )}
                    {this.state.editFormOpen && (
                        <MenuDiv>
                        <EditPost
                            post={this.post}
                            handleClickOutside={this.handleClickOutside}
                        />
                        </MenuDiv>
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
import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

// Import Components

import PostList from '../components/PostList';

// Import Actions

import {getData} from '../actions/index';

// Styled Components

const PostViewWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 1rem 2px;
    background: white;
    text-align: center;
`

// PostView Component Constructor

class PostView extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (   
            <PostViewWrapper>
                {this.props.fetchingData && (
                    <Loader className="loader-spinner"type="Rings" color="#ff0000" height={80} width={80}/>
                )}
                {this.props.data && !this.props.fetchingData && (
                    <PostList data={this.props.data}/>
                )}
                {this.props.data.length === 0 && !this.props.fetchingData && !this.props.loadDataErr && (
                    <p>You do not have any posts.</p>
                )}
                {this.props.loadDataErr && (
                    <p>{this.props.loadDataErr}</p>
                )}
            </PostViewWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        fetchingData: state.fetchingData,
        loadDataErr: state.loadDataErr
    }
}

export default connect(mapStateToProps, {getData})(PostView);
import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import NavBar from '../components/NavBar';
import PostList from '../components/PostList';

import {getData} from '../actions/index';

class PostView extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <>
                <NavBar/>
                <div className="post-view-container">
                    {this.props.fetchingData && (
                        <Loader className="loader-spinner"type="Rings" color="#ff0000" height={80} width={80}/>
                    )}
                    {this.props.data && (
                        <PostList data={this.props.data}/>
                    )}
                    {this.props.data.length === 0 && !this.props.fetchingData && !this.props.loadDataErr && (
                        <p>You do not have any posts.</p>
                    )}
                    {this.props.loadDataErr && (
                        <p>{this.props.loadDataErr}</p>
                    )}
                </div>
            </>
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
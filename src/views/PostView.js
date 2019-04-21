import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import PostList from '../components/PostList';

import {getData} from '../actions/index';

class PostView extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className="post-view-container">
                {this.props.fetchingData && (
                    <Loader className="loader-spinner"type="Rings" color="#ff0000" height={80} width={80}/>
                )}
                {this.props.data && (
                    <PostList data={this.props.data}/>
                )}
                {!this.props.data && !this.props.loadDataErr(
                    <p>No data to show</p>
                )}
                {this.props.loadDataErr && (
                    <p>Cannot load data!</p>
                )}
            </div>
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
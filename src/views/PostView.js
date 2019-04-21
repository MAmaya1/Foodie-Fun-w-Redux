import React from 'react';
import {connect} from 'react-redux';

import PostList from '../components/PostList';

import {getData} from '../actions/index';

class PostView extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className="post-view-container">
                <PostList data={this.props.data}/>
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
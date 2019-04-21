import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PostView from './views/PostView';
import PostDetails from './components/PostDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/private' component={PostView}/>
        <Route path='/post-details/:id' component={PostDetails}/>
      </Router>
    );
  }
}

export default App;
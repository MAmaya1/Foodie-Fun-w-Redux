import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import Components

import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import PrivateRoute from './components/PrivateRoute';
import PostView from './views/PostView';
import PostDetails from './components/PostDetails';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/private' component={PostView}/>
        <Route path='/register' component={RegistrationForm}/>
        <Route path='/post-details/:id' component={PostDetails}/>
        <Route path='/add-post' component={AddPost}/>
        <Route path='/edit-post/:id' component={EditPost}/>
      </Router>
    );
  }
}

export default App;
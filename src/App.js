import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import Components

import NavBar from './components/NavBar';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import PrivateRoute from './components/PrivateRoute';
import PostView from './views/PostView';
import PostDetails from './components/PostDetails';
import AddPost from './components/AddPost';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Route exact path='/' component={Login}/>
        <PrivateRoute path='/private' component={PostView}/>
        <Route path='/register' component={RegistrationForm}/>
        <Route path='/post-details/:id' component={PostDetails}/>
        <Route path='/add-post' component={AddPost}/>
      </Router>
    );
  }
}

export default App;
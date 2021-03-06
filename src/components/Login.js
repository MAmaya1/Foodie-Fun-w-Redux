import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import {login} from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/private')
            })
    }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password"/>
                    <input
                        id="password"
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="password"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.login}>
                        {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : ('Log In')}
                    </button>
                    <div className="spacer">
                        {this.props.loginError && (
                            <p className="err">{this.props.loginError}</p>
                        )}
                    </div>
                    <p>Not a registered user? <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn,
        loginError: state.loginError
    }
}

export default connect(mapStateToProps, {login})(Login);
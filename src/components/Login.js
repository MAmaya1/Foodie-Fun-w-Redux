import React from 'react';
import {connect} from 'react-redux';
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
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    {this.props.loginError && (
                        alert('error loggin in')
                    )}
                    <button onClick={this.login}>
                        {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : ('Log In')}
                    </button>
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
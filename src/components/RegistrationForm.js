import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { addUser } from '../actions';

class RegistrationForm extends React.Component {
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

    addUser = event => {
        event.preventDefault();
        this.props.addUser(this.state.credentials)
        .then(() => {
            !this.props.addUserError && (
                this.props.history.push('/private')
            )
        })
    }

    render() {
        return (
            <div className="register">
                <h2>Register Here</h2>
                <form>
                    <label htmlFor="username"/>
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
                    <button onClick={this.addUser}>
                        {this.props.addingUser ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : ('Sign Up')}
                    </button>
                    <div className="spacer">
                        {this.props.addUserError && (
                            <p>{this.props.addUserError}</p>
                        )}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingUser: state.addingUser,
        addUserError: state.addUserError
    }
}

export default connect(mapStateToProps, {addUser})(RegistrationForm);
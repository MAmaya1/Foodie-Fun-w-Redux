import axios from 'axios';

import axiosWithAuth from '../utils/axiosAuth';

// Login Action Types

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Login Action Creator

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://backend-foodie-fun.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: 'Incorrect username and/or password' })
        })
}

// Add New User Action Types

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

// Add New User Action Creator

export const addUser = credentials => dispatch => {
    dispatch({ type: ADD_USER_START });
    return axios
        .post('https://backend-foodie-fun.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: ADD_USER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_USER_FAILURE, payload: 'This username is already taken.'})
        })
}

// Fetch Data Action Types

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Fetch Data Action Creator

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
        .get('https://backend-foodie-fun.herokuapp.com/api/meals')
        .then(res => {
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: err
            })
        })
}

// Edit Post Action Types

export const EDIT_POST_START = 'EDIT_POST_START'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'

// Edit Post Action Creator

export const editPost = (id, updatedPost) => dispatch => {
    dispatch({ type: EDIT_POST_START });
    axiosWithAuth()
        .put(`https://backend-foodie-fun.herokuapp.com/api/meals/${id}`, updatedPost)
        .then(res => {
            dispatch({
                type: EDIT_POST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: EDIT_POST_FAILURE,
                payload: err
            })
        })
}
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
            dispatch({ type: LOGIN_FAILURE, payload: err })
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
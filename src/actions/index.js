import axios from 'axios';

// Fetch Data Action Types

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Fetch Data Action Creator

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios.get('https://backend-foodie-fun.herokuapp.com/api/meals')
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
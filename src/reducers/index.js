import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,    
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/index';

// Set Initial State

const initialState = {
    data: [],
    loggingIn: false,
    loginError: null,
    fetchingData: false,
    loadDataErr: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                loginError: null,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loginError: null
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loginError: action.payload
            }

        case FETCH_DATA_START:
            return {
                ...state,
                fetchingData: true,
                loadDataErr: null
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetchingData: false,
                loadDataErr: null
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetchingData: false,
                loadDataErr: action.payload
            }

        default:
            return state;
    }
}

export default reducer;
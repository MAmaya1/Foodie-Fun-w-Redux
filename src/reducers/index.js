import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    EDIT_POST_START,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILURE
} from '../actions/index';

// Set Initial State

const initialState = {
    data: [],
    loggingIn: false,
    loginError: null,
    addingUser: false,
    addUserError: null,
    fetchingData: false,
    loadDataErr: null,
    editingPost: false,
    editSuccess: false,
    editFailure: null
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

        case ADD_USER_START: 
            return {
                ...state,
                addingUser: true,
                addUserError: null
            }
        
        case ADD_USER_SUCCESS:
            return {
                ...state,
                addingUser: false,
                addUserError: null
            }
        
        case ADD_USER_FAILURE:
            return {
                ...state,
                addingUser: false,
                addUserError: action.payload
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

        case EDIT_POST_START:
            return {
                ...state,
                editingPost: true,
                editFailure: null
            }

        case EDIT_POST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                editingPost: false,
                editSuccess: true
            }
        
        case EDIT_POST_FAILURE:
            return {
                ...state,
                editingPost: false,
                editSuccess: false,
                editFailure: action.payload
            }

        default:
            return state;
    }
}

export default reducer;
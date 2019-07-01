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
    ADD_POST_START,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    EDIT_POST_START,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILURE,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE
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
    addingPost: false,
    addPostFailure: null,
    editingPost: false,
    editFailure: null,
    deletingPost: false,
    deletePostFailure: null
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

        case ADD_POST_START:
            return {
                ...state,
                addingPost: true,
                addPostFailure: null
            }

        case ADD_POST_SUCCESS:
            return {
                ...state,
                addingPost: false,
                addPostFailure: null
            }

        case ADD_POST_FAILURE:
            return {
                ...state,
                addingPost: false,
                addPostFailure: action.payload
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
                editingPost: false,
                editFailure: null
            }
        
        case EDIT_POST_FAILURE:
            return {
                ...state,
                editingPost: false,
                editFailure: action.payload
            }

        case DELETE_POST_START:
            return {
                ...state,
                deletingPost: true,
                deletePostFailure: null
            }

        case DELETE_POST_SUCCESS:
            return {
                ...state,
                deletingPost: false,
                deletePostFailure: null
            }

        case DELETE_POST_FAILURE:
            return {
                ...state,
                deletingPost: false,
                deletePostFailure: action.payload
            }

        default:
            return state;
    }
}

export default reducer;
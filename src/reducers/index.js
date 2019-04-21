import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/index';

// Set Initial State

const initialState = {
    data: [],
    fetchingData: false,
    loadDataErr: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
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
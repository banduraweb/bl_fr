import {
    START_LOADING,
    STOP_LOADING,
    ERROR_LOADING_POST,
    CLEAR_ERROR_LOADING_POST,
    SAVE_CURRENT_POST, currentPostDispatchTypes,
    EDIT_CURRENT_POST_DATA
} from '../actions/currentPostActions';
import {Post} from "../../types/types";


interface InitStateI {
    post: Post,
    loading: boolean,
    hasErrors: boolean
}

const initState: InitStateI = {
    post: null,
    loading: false,
    hasErrors: false
};


const currentPostReducer = (state: InitStateI = initState , action: currentPostDispatchTypes):  InitStateI => {
    switch (action.type) {
        case SAVE_CURRENT_POST:
            const {post} = action;
            return {
                ...state,
                post: post
            };
        case EDIT_CURRENT_POST_DATA:
            const {target} = action;
            return {
                ...state,
                post: {...state.post, ...{[target.name]: target.value}}
            };

        case START_LOADING:
            return {
                ...state,
                loading: true,
            };

        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            };

        case ERROR_LOADING_POST:
            return {
                ...state,
                hasErrors: true,
            };

        case CLEAR_ERROR_LOADING_POST:
            return {
                ...state,
                hasErrors: false,
            };
        default:
            return {...state};
    }
};

export default currentPostReducer;



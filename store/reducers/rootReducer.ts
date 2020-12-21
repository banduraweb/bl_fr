import postsReducer from './postsReducer';
import {combineReducers} from 'redux';
import currentPostReducer from "./currentPostReduser";

const rootReducer = combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer
});

export default rootReducer;

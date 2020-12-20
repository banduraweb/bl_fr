import postsReducer from './postsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;

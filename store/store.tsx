import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer';


export function initializeStore(initialState) {

    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

import { applyMiddleware, createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import personalReducer from './resume.reducers';



const rootReducer =  combineReducers({
    personal: personalReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
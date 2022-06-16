import { applyMiddleware, createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import experienceReducer from './experience/experience.reducers';


const rootReducer =  combineReducers({
  experience: experienceReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import educationReducers from './education/education.reducers';
import experienceReducer from './experience/experience.reducers';
import optionReducer from './selectedOptions/selectedOption.reducers';
import skillsReducer from './skills/skills.reducers';



const rootReducer =  combineReducers({
  experience: experienceReducer,
  options: optionReducer,
  education: educationReducers,
  skills: skillsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
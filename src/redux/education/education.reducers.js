import * as actions from './education.actions';
import {CV} from '../../CV/CVFake';

const {education} = CV;
const INITIAL_STATE = {
    education: education
};

const educationReducers = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case actions.ADD_EDUCATION : {
            return {...state, education: [...education, action.payload]}
        }
        default:
            return state;
    }
}

export default educationReducers;
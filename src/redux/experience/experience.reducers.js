import {CV} from '../../CV/CVFake';
import * as actions from './experience.actions';

const {experience} = CV; 

const initialState = {
    experience: experience,
}

const experienceReducer = (state = initialState, action) => {
    const {experience} = state; 
    switch(action.type){
        case actions.ADD_EXPERIENCE: {
            return {...state, experience: [...experience, action.payload]};
        }
        default:
            return state;
    }
}

export default experienceReducer;
import {CV} from '../../CV/CVFake';
import * as actions from './experience.actions';

const {experience} = CV; 

const INITIAL_STATE = {
    experience: experience,
}

const experienceReducer = (state = INITIAL_STATE, action) => {
    const {experience} = state; 
    switch(action.type){
        case actions.ADD_EXPERIENCE: {
            return {...state, experience: [...experience, action.payload]};
        }
        case actions.DELETE_EXPERIENCE: {
            let auxArray = [];
            action.payload.forEach((data) =>{
                auxArray = experience.filter(exp => exp !== data);
            });
            return {...state, experience: [...auxArray]}
        }
        default:
            return state;
    }
}

export default experienceReducer;
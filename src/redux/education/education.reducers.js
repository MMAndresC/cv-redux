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
        case actions.DELETE_EDUCATION: {
            let auxArray = state.education;
            action.payload.forEach((data) =>{
                auxArray = auxArray.filter(exp => exp !== data);
            });
            return {...state, education: [...auxArray]}
        }
        default:
            return state;
    }
}

export default educationReducers;
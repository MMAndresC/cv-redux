import * as actions from './education.actions';
import {CV} from '../../CV/CVFake';

const {education} = CV;
const INITIAL_STATE = {
    education: education
};

const educationReducers = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case actions.ADD_EDUCATION : {
            const aux = state.education; //No conseguia que renderizara de nuevo, con ese return ya me sale
            aux.push(action.payload);
            return {...state, education:[...aux]}
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
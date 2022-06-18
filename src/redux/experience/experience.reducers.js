
import {CV} from '../../CV/CVFake';
import * as actions from './experience.actions';


const {experience} = CV; 


const INITIAL_STATE = {
    experience: experience,
    
}

const experienceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.ADD_EXPERIENCE: {
            const aux = state.experience; //No conseguia que renderizara de nuevo, con ese return ya me sale
            aux.push(action.payload);
            return {...state, experience:[...aux]}
        }
        case actions.DELETE_EXPERIENCE: {
            let auxArray = state.experience;
            action.payload.forEach((data) =>{
                auxArray = auxArray.filter(exp => exp !== data);
            });
            return {...state, experience: [...auxArray]}
        }
        case actions.EDIT_EXPERIENCE: {
            const {experienceToEdit, index} = action.payload;
            console.log('reducer', experienceToEdit, index);
            state.experience[index] = experienceToEdit;
            return {...state };
        }
        default:
            return state;
    }
}

export default experienceReducer;
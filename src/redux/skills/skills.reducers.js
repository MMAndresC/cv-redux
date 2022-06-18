import * as actions from './skills.actions';
import {CV} from '../../CV/CVFake';




const {skills} = CV;
const INITIAL_STATE = {
    skills: skills, 
};


const skillsReducer = (state=INITIAL_STATE, action) => { 
    switch(action.type){
        case actions.ADD_SKILL: { 
            const {newSkill, selector} = action.payload;
            const aux = newSkill.list;
            state.skills[selector].list.push(aux);
            return {...state};
        }
        case actions.DELETE_SKILLS: { 
            const {skillsToDelete, selector} = action.payload;
            let auxArray = skills[selector]['list'];
            skillsToDelete.forEach((data) =>{
                auxArray = auxArray.filter(exp => exp !== data);
            });
            state.skills[selector].list = auxArray;
            return state;
        }            
        default:
            return state
    }
}

export default skillsReducer;
import * as actions from './skills.actions';
import {CV} from '../../CV/CVFake';




const {skills} = CV;
const INITIAL_STATE = {
    skills: skills
};

const skillsReducer = (state=INITIAL_STATE, action) => { //FALTA HACER LA DIVISION POR EL SELECT
    switch(action.type){
        case actions.ADD_SKILL: { 
            const {newSkill, selector} = action.payload;
            const aux = newSkill.list;
            state.skills[selector].list.push(aux);
            return state;
        }
        default:
            return state
    }
}

export default skillsReducer;
import * as actions from './selectedOption.actions';

const INITIAL_STATE = {
    category: 'skills',
    operation: 'add',
    skills: true,
    categorySkill: 'FSDeveloper'
};

const optionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.MODIFY_CATEGORY: {
            return {...state, category: action.payload };
        }
        case actions.MODIFY_OPERATION: {
            return {...state, operation: action.payload};
        }
        case actions.MODIFY_SKILL: {
            return {...state, categorySkill: action.payload}
        }
        default:
            return state;
    }
    
};

export default optionReducer;
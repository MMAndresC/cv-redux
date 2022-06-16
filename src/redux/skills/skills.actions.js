

export const ADD_SKILL = 'ADD_SKILL';

export const addSkill = (newSkill, selector) => dispatch => {
    dispatch ({
        type: ADD_SKILL,
        payload: {
            newSkill,
            selector
        }
    });
};
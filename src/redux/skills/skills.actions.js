

export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILLS = 'DELETE_SKILLS';

export const addSkill = (newSkill, selector) => dispatch => {
    dispatch ({
        type: ADD_SKILL,
        payload: {
            newSkill,
            selector
        }
    });
};

export const deleteSkills = (skillsToDelete, selector) => dispatch => {
    dispatch ({
        type: DELETE_SKILLS,
        payload: {
            skillsToDelete,
            selector
        }
    });
}
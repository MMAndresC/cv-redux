
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';

export const addExperience = (newExperience) => dispatch => {
    dispatch({
        type: ADD_EXPERIENCE,
        payload: newExperience
    })
};


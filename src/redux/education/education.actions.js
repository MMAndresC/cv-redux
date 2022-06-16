
export const ADD_EDUCATION = 'ADD_EDUCATION';

export const addEducation = (newEducation) => dispatch => {
    dispatch ({
        type: ADD_EDUCATION,
        payload: newEducation
    });
}
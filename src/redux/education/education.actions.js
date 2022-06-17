
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';

export const addEducation = (newEducation) => dispatch => {
    dispatch ({
        type: ADD_EDUCATION,
        payload: newEducation
    });
}

export const deleteEducation = (educationToDelete) => dispatch => {
    dispatch({
        type: DELETE_EDUCATION,
        payload: educationToDelete
    });
}
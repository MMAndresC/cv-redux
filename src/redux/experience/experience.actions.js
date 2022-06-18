
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
export const EDIT_EXPERIENCE = 'EDIT_EXPERIENCE';

export const addExperience = (newExperience) => dispatch => {
    dispatch({
        type: ADD_EXPERIENCE,
        payload: newExperience
    })
};

export const deleteExperience = (experiencesToDelete) => dispatch => {
    dispatch({
        type: DELETE_EXPERIENCE,
        payload: experiencesToDelete
    });
};

export const editExperience = (experienceToEdit, index) => dispatch => {
    dispatch({
        type: EDIT_EXPERIENCE,
        payload: {
            experienceToEdit: experienceToEdit,
            index : index
        }
    });
}


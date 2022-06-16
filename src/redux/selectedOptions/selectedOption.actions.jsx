

export const MODIFY_CATEGORY = 'MODIFY_CATEGORY';
export const MODIFY_OPERATION = 'MODIFY_OPERATION';
export const MODIFY_SKILL = 'MODIFY_SKILL';

export const modifyCategory = (data) => dispatch => {
    dispatch({
        type: MODIFY_CATEGORY,
        payload: data
    });
};

export const modifyOperation = (data) => dispatch => {
    dispatch({
        type: MODIFY_OPERATION,
        payload: data
    });
};

export const modifyCategorySkill = (data) => dispatch => {
    dispatch({
        type: MODIFY_SKILL,
        payload: data
    });
}
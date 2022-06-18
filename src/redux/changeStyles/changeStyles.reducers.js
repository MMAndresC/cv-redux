import * as actions from './changeStyles.actions';

const btnCategoryPrev = document.querySelector('.btn-on');

const INITIAL_VALUE = {
    prevBtn: btnCategoryPrev,
    nextBtn: btnCategoryPrev
}

const styleReducer = (state=INITIAL_VALUE, action) => {
    switch(action.type){
        case actions.STYLE_BUTTON: {
            const {prevButton, nextButton} = action.payload;
            prevButton.className = 'btn-off';
            nextButton.className = 'btn-on';
            return {...state, prevBtn:nextButton, nextBtn: nextButton};
        }
        default:
            return state;
    }
}

export default styleReducer;
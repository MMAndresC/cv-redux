

export const STYLE_BUTTON = 'STYLE_BUTTON';

export const changeStyleButton = (prevButton,nextButton) => dispatch => {
    dispatch({
        type: STYLE_BUTTON,
        payload: {
            prevButton: prevButton,
            nextButton: nextButton
        }
    })
    
}
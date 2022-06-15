
import {CV} from '../CV/CVFake';

const {personal} = CV;

const initialState = {
    personal: personal
};

const personalReducer = (state = initialState, action) => {
    return state;
}

export default personalReducer;
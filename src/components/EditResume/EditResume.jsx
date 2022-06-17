
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

import {modifyCategory, modifyOperation} from '../../redux/selectedOptions/selectedOption.actions';

import FormExpEduc from './FormExpEduc';
import FormSkills from './FormSkills';
import ShowToAdd from './ShowToAdd';
import ShowToDelete from './ShowToDelete';



const EditResume = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    

    const handleChange = (event) => {
        dispatch(modifyOperation(event.target.value));
    }


    return (
        <div>
            <select onChange={handleChange}>
                <option value='add' default>Add</option>
                <option value='edit'>Edit</option>
                <option value='delete'>Delete</option>
            </select>
            { options.category === 'skills' 
                ? <FormSkills/> 
                : <FormExpEduc />
            }
            
            <div>
                <button onClick={() => dispatch(modifyCategory('skills'))}>Skills</button>
                <button onClick={() => dispatch(modifyCategory('experience'))}>Experience</button>
                <button onClick={() => dispatch(modifyCategory('education'))}>Education</button>
                <div>
                    { options.operation === 'add' &&  <ShowToAdd />} 
                    { options.operation === 'delete' &&  <ShowToDelete />} 
                </div> 
            </div>
            <button onClick={() => navigate('/resume')}>Go to Resume</button>
        </div>
    );
}

export default EditResume;
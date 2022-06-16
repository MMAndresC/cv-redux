import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import FormExpEduc from './FormExpEduc';
import FormSkills from './FormSkills';
import ShowToAdd from './ShowToAdd';

const INITIAL_STATE = {
    category: 'skills',
    operation: 'add',
    skills: true,
    categorySkill: 'FSDeveloper'
};

const EditResume = () => {
    const [selection, setSelection] = useState(INITIAL_STATE);
    const navigate = useNavigate();
    

    const handleChange = (event) => {
        const change = {...selection, operation: event.target.value}
        setSelection(change);
    }
    

    return (
        <div>
            <select onChange={handleChange}>
                <option value='add' default>Add</option>
                <option value='edit'>Edit</option>
                <option value='delete'>Delete</option>
            </select>
            { selection.category === 'skills' 
                ? <FormSkills/> 
                : <FormExpEduc selection={selection}/>
            }
            
            <div>
                <button onClick={() => setSelection.category('skills')}>Skills</button>
                <button onClick={() => setSelection.category('experience')}>Experience</button>
                <button onClick={() => setSelection.category('education')}>Education</button>
                <div>
                    { selection.operation === 'add' && <ShowToAdd selection={selection}/>}
                </div>
            </div>
            <button onClick={() => navigate('/resume')}>Go to Resume</button>
        </div>
    );
}

export default EditResume;
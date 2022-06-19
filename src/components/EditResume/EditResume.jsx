import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { modifyCategory, modifyOperation } from '../../redux/selectedOptions/selectedOption.actions';

import FormAddExpEduc from './FormAddExpEduc';
import FormAddSkills from './FormAddSkills';
import FormEditExpEduc from './FormEditExpEduc';
import ShowToAdd from './ShowToAdd';
import ShowToDelete from './ShowToDelete';
import ShowToEdit from './ShowToEdit';



const EditResume = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { options } = useSelector(state => state);
 
  const [category, setCategory] = useState('skills');

    const handleChange = (event) => {
        dispatch(modifyOperation(event.target.value));
    }

    const changeCategory = (category) =>{
        setCategory(category);
        dispatch(modifyCategory(category));
        
    }

    const getCategoryClassName = (elementCategory) => {
        return `btn-category ${elementCategory === category ? 'btn-category--selected' : ''} `
    }
    

    return (
        <div className='container'>
            <select className='select-category' onChange={handleChange}>
                <option value='add' default>Add</option>
                <option value='edit'>Edit</option>
                <option value='delete'>Delete</option>
            </select>
            <div className='container-show-buttons'>
                <button name='btn-category' id='skills' className={getCategoryClassName('skills')} onClick={() => changeCategory('skills')}>Skills</button>
                <button name='btn-category' id='experience' className={getCategoryClassName('experience')} onClick={() => changeCategory('experience')}>Experience</button>
                <button name='btn-category' id='education' className={getCategoryClassName('education')} onClick={() => changeCategory('education')}>Education</button>
            </div>
            <div className='container-show'>
                <div className='container-show-list'>
                    {options.operation === 'add' && <ShowToAdd />}
                    {options.operation === 'delete' && <ShowToDelete />}
                    {options.operation === 'edit' && <ShowToEdit />}
                    {(options.operation === 'edit' &&  options.category === 'skills') && <ShowToAdd />}
                </div>
            
                <div className='container-form'>
                    {/*Para mostrar el form de add solo cuando este seleccionado add*/ }
                    {(options.operation === 'add' &&  options.category === 'skills') && <FormAddSkills />}
                    {(options.operation === 'add' &&  options.category === 'education') && <FormAddExpEduc />}
                    {(options.operation === 'add' &&  options.category === 'experience') && <FormAddExpEduc />}

                    {/*Para mostrar el form edit solo cuando este seleccionado edit*/}
                    {(options.operation === 'edit' &&  options.category === 'experience') && <FormEditExpEduc />}
                    {(options.operation === 'edit' &&  options.category === 'education') && <FormEditExpEduc />}
                </div>
            </div>

            <button className='btn-goback' onClick={() => navigate('/resume')}>Go to Resume</button>
        </div>
    );
}

export default EditResume;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { modifyCategory, modifyOperation } from '../../redux/selectedOptions/selectedOption.actions';
import { changeStyleButton } from '../../redux/changeStyles/changeStyles.actions';

import FormAddExpEduc from './FormAddExpEduc';
import FormAddSkills from './FormAddSkills';
import FormEditExpEduc from './FormEditExpEduc';
import ShowToAdd from './ShowToAdd';
import ShowToDelete from './ShowToDelete';
import ShowToEdit from './ShowToEdit';

import './editresume.scss';



const EditResume = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [styleOn, setStyleOn] = useState('btn-on');
    
   
    const { options } = useSelector(state => state);


    const handleChange = (event) => {
        dispatch(modifyOperation(event.target.value));
    }

    const handleClickCategory = (event) => {
    /*     const btn = document.querySelectorAll('[name=btn-category]');
        btn.forEach((item) => {
            if(){

            }else{
                setStyleOn('btn-off');
            }
        })
        dispatch(modifyCategory(event.target.id)) */
        setStyleOn('btn-on');
    }
    

    return (
        <div className='container'>
            <select className='category-select' onChange={handleChange}>
                <option value='add' default>Add</option>
                <option value='edit'>Edit</option>
                <option value='delete'>Delete</option>
            </select>
            <div className='container-show-buttons'>
                <button name='btn-category' id='skills' className={styleOn} onClick={handleClickCategory}>Skills</button>
                <button name='btn-category' id='experience' onClick={() => dispatch(modifyCategory('experience'))}>Experience</button>
                <button name='btn-category' id='education' onClick={() => dispatch(modifyCategory('education'))}>Education</button>
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

            <button onClick={() => navigate('/resume')}>Go to Resume</button>
        </div>
    );
}

export default EditResume;
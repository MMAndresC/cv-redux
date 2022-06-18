
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {addEducation} from '../../redux/education/education.actions';
import {addExperience} from '../../redux/experience/experience.actions';

import './editresume.scss'


const FormAddExpEduc = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);

    const onSubmit = (formData) => {
        if(options.category === 'experience'){
            dispatch(addExperience(formData));
        }else{
            dispatch(addEducation(formData));
        }
        reset();    
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form__add-educ-exp'>
            <label>
                <span>Name:</span>
                <input type='text' name='name' {...register('name')}></input>
            </label>
            <label>
                <span>Date:</span>
                <input type='text' name='date' {...register('date')}></input>
            </label>
            <label>
                <span>Where:</span>
                <input type='text' name='where' {...register('where')}></input>
            </label>
            {options.category === 'experience' &&  
                <label>
                    <span>Description:</span>
                    <textarea name='description' rows={10} cols={50} {...register('description')}></textarea>
                </label>
            }
            <button>Add</button>
        </form>
    );
}

export default FormAddExpEduc;
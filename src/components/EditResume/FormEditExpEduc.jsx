
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
import { editEducation } from '../../redux/education/education.actions';
import { editExperience } from '../../redux/experience/experience.actions';
import './editresume.scss';




const FormEditExpEduc = () => {
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    const { register, handleSubmit, reset } = useForm();
        
    
    useEffect(() =>{ //Para que ponga el el form el item que esta seleccionado para editar
        reset(options.toEdit.data);
        //eslint-disable-next-line
    },[options.toEdit.data])


    const onSubmit = (formData) => {
        if(options.category === 'experience'){
            dispatch(editExperience(formData, options.toEdit.index));
        }
        if(options.category === 'education'){
            dispatch(editEducation(formData, options.toEdit.index));
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            
            <button className='btn-edit'>Save</button>
        </form>
    );
}

export default FormEditExpEduc;
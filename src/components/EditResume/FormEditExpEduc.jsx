
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { editExperience } from '../../redux/experience/experience.actions';




const FormEditExpEduc = () => {
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    
    
    useEffect(() =>{ //Para que ponga el el form el item que esta seleccionado para editar
        reset(options.toEdit.data);
    },[options.toEdit.data])



    const onSubmit = (formData) => {
        if(options.category === 'experience'){
            dispatch(editExperience(formData, options.toEdit.index));
            console.log('toedit', formData);
            reset(); 
            navigate('/editresume');
        }else{
            //dispatch(addEducation(formData));
        }
        
        //   
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
                <input type='text' name='description' {...register('description')}></input>
            </label>
            }
            
            <button>Save changes</button>
        </form>
    );
}

export default FormEditExpEduc;
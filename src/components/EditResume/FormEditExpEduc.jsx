
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import { useEffect } from 'react';




const FormEditExpEduc = () => {
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    console.log(options.toEdit);
    const { register, handleSubmit, reset } = useForm();
    
    useEffect(() =>{ //Para que ponga el el form el item que esta seleccionado para editar
        reset(options.toEdit);
    },[options.toEdit])



    const onSubmit = (formData) => {
        if(options.category === 'experience'){
            console.log(formData);
            //dispatch(addExperience(formData));
        }else{
            //dispatch(addEducation(formData));
        }
        reset();    
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
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {addExperience} from '../../redux/experience/experience.actions';

const FormResume = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    

    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(addExperience(formData));

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
            <button>Save</button>
        </form>
    );
}

export default FormResume;
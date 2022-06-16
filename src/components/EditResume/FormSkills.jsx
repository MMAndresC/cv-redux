import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

const FormSkills = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        //dispatch(formData); FALTA EL REDUCER
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <select name='name' {...register('name')}>
                    <option value='FSDeveloper' default>Full stack Developer</option>
                    <option value='BD'>BD</option>
                    <option value='learningLanguages'>Learning languages</option>
                </select>
            </label>
            <label>
                <span>Name:</span>
                <input type='text' name='list' {...register('list')}></input>
            </label>
            <button>Save</button>
        </form>
    );
}

export default FormSkills;
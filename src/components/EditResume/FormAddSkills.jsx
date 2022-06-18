import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { addSkill } from '../../redux/skills/skills.actions';
import { modifyCategorySkill } from '../../redux/selectedOptions/selectedOption.actions';

const FormAddSkills = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {categorySkill} = useSelector(state => state.options);
    

    const onSubmit = (formData) => {
        dispatch(addSkill(formData, categorySkill)); 
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <select name='name' onChange={(event) => dispatch(modifyCategorySkill(event.target.value))}>
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

export default FormAddSkills;
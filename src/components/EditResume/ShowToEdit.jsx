
import {useSelector, useDispatch} from 'react-redux';
import { itemToEdit } from '../../redux/selectedOptions/selectedOption.actions';
import {modifyCategorySkill} from '../../redux/selectedOptions/selectedOption.actions';
import './editresume.scss';

const ShowToEdit = () => {
    const {options} = useSelector(state => state);
    const {experience} = useSelector(state => state.experience);
    const {education} = useSelector(state => state.education);
    const dispatch = useDispatch();
    

    const handleSelected = (event) => {
        if(options.category === 'experience'){
            dispatch(itemToEdit(experience[event.target.id], event.target.id));
        }
        if(options.category === 'education'){
            dispatch(itemToEdit(education[event.target.id], event.target.id));
        }
    }

    
    return(
        <div className='container-edit'>
            {options.category === 'experience' &&
                experience.map((info, index) => {
                    return (
                        <label key={`${index}-deleteexperience`}>
                            <input type='radio' name='option' id={index} onChange={handleSelected} />
                            <span>{info.date}</span>
                            <span>{info.name}</span>
                            <span>{info.where}</span>
                            <p>{info.description}</p>
                        </label>
                    );
                })
            }  

            {options.category === 'education' &&
                education.map((info, index) => {
                    return (
                        <label className='edit-education' key={`${index}-deleteeducation`}>
                            <input type='radio' name='option' id={index} onChange={handleSelected}/>
                            <span>{info.date}</span>
                            <span>{info.name}</span>
                            <span>{info.where}</span>
                        </label>
                    );
                })
            }    

            { options.category === 'skills' &&
                <div> 
                    <label>
                        <select name='name' onChange={(event) => dispatch(modifyCategorySkill(event.target.value))}>
                            <option value='FSDeveloper' default>Full stack Developer</option>
                            <option value='BD'>BD</option>
                            <option value='learningLanguages'>Learning languages</option>
                        </select>
                    </label>
                </div> 
            }
        </div>
    );
}

export default ShowToEdit;
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { itemToEdit } from '../../redux/selectedOptions/selectedOption.actions';

const ShowToEdit = () => {
    const state = useSelector(state => state);
    const {options} = useSelector(state => state);
    const {experience} = useSelector(state => state.experience);
    const {education} = useSelector(state => state.education);
    const dispatch = useDispatch();
    const [edited, setEdited] = useState({});
    const [checked, setChecked] = useState(false);
    const {category, categorySkill} = options;

    const handleSelected = (event) => {
       dispatch(itemToEdit(experience[event.target.id]));
     
 /*        if(category === 'skills'){ //El objeto de skill tiene diferente distribucion que education y experience
            setToEdit(state[category][category][categorySkill].list[event.target.id]);
        }else{
            //console.log(event.target.id);
            //console.log(state[category][category][event.target.id]);
            
            const aux = state[category][category][event.target.id];
            //console.log('uax', aux);
            //setToEdit(aux);
            
        }    */
    }

  
    
    return(
        <div className='container-edit'>
            {options.category === 'experience' &&
                experience.map((info, index) => {
                    return (
                        <label key={`${index}-deleteexperience`}>
                            <input type='radio' name='option' id={index} onChange={handleSelected} />
                            {`${info.date} ${info.name} ${info.where} ${info.description}`}
                        </label>
                    );
                })
            }  

            {options.category === 'education' &&
                education.map((info, index) => {
                    return (
                        <label key={`${index}-deleteeducation`}>
                            <input type='radio' name='option' id={index} onChange={handleSelected}/>
                            {`${info.date} ${info.name} ${info.where}`}
                        </label>
                    );
                })
            }    

  {/*           { options.category === 'skills' &&
                <div> 
                    <label>
                        <select name='name' onChange={(event) => dispatch(modifyCategorySkill(event.target.value))}>
                            <option value='FSDeveloper' default>Full stack Developer</option>
                            <option value='BD'>BD</option>
                            <option value='learningLanguages'>Learning languages</option>
                        </select>
                    </label>
                    {skills[options.categorySkill]['list'].map((info, index) => {
                        return (
                            <label key={`${index}-add-${JSON.stringify(options.categorySkill)}`}>
                                <input type='checkbox' name='option' id={index} /> 
                                {info}
                            </label>
                        );
                    })} 
                </div> 
            } */}
        </div>
    );
}

export default ShowToEdit;
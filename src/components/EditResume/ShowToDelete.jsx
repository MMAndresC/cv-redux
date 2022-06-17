import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteExperience } from '../../redux/experience/experience.actions';


const ShowToDelete = () => {
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    const {experience} = useSelector(state => state.experience);
    const {education} = useSelector(state => state.education);
    const {skills} = useSelector(state => state.skills);
    const [checkedList, setCheckedList] = useState([]);

    const handleChecked = (event) => {
        if(event.target.checked){
            const aux = checkedList;
            aux.push(experience[event.target.id]);
            setCheckedList(aux);
        }else{
            const aux = checkedList.filter(list => list !== experience[event.target.id])
            setCheckedList(aux);
        }
    }
    
    const handleDelete = () => {
        dispatch(deleteExperience(checkedList));
    }

    return(
        <div className='container-delete'>
            {options.category === 'experience' &&
                experience.map((info, index) => {
                    return (
                        <label key={`${index}-deleteexperience`}>
                            <input type='checkbox' id={index} onChange={handleChecked}/>
                            {`${info.date} ${info.name} ${info.where} ${info.description}`}
                        </label>
                    );
                })
            }  

            {options.category === 'education' &&
                education.map((info, index) => {
                    return (
                        <label key={`${index}-deleteeducation`}>
                            <input type='checkbox' id={index} />
                            {`${info.date} ${info.name} ${info.where} ${info.description}`}
                        </label>
                    );
                })
            }    

            { options.category === 'skills' &&
                <div> 
                    <h2>{skills[options.categorySkill].name}</h2>   
                    {skills[options.categorySkill]['list'].map((info, index) => {
                        return (
                            <label key={`${index}-add-${JSON.stringify(options.categorySkill)}`}>
                                <input type='checkbox' id={index} /> 
                                {info}
                            </label>
                        );
                    })} 
                </div> 
            }
            <button onClick={handleDelete}>Delete selectioned</button> {/* HAY QUE DESCHEQUEAR, PASA SOBRE TODO CUANDO BORRA EL PRIMERO*/}
        </div>
    );
}

export default ShowToDelete;
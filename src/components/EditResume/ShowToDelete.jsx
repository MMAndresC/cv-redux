import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteEducation } from '../../redux/education/education.actions';
import { deleteExperience } from '../../redux/experience/experience.actions';
import { deleteSkills } from '../../redux/skills/skills.actions';
import { modifyCategorySkill } from '../../redux/selectedOptions/selectedOption.actions';


const ShowToDelete = () => {
    const dispatch = useDispatch();
    const {options} = useSelector(state => state);
    const {experience} = useSelector(state => state.experience);
    const {education} = useSelector(state => state.education);
    const {skills} = useSelector(state => state.skills);
    const state = useSelector(state => state);
    const [checkedList, setCheckedList] = useState([]);
    const {category} = options;
    const {categorySkill} = options;

    const handleChecked = (event) => { //Añade o quita de la var de estado las opciones que se marcan o desmarcan
        if(event.target.checked){ //Cuando se marca
            const aux = checkedList;
            if(category === 'skills'){ //El objeto de skill tiene diferente distribucion que education y experience
                aux.push(state[category][category][categorySkill].list[event.target.id]);
                setCheckedList(aux);
            }else{
                aux.push(state[category][category][event.target.id]);
                setCheckedList(aux);
            }
        }else{ //Cuando se desmarca
            if(category === 'skills'){
                const aux = checkedList.filter(list => list !== state[category][category][categorySkill].list[event.target.id]) 
                setCheckedList(aux);
            }else{
                const aux = checkedList.filter(list => list !== state[category][category][event.target.id])
                setCheckedList(aux);
            }
        }
    }
    
    const handleDelete = () => { //RECORDAR DESHABILITAR BOTON CUANDO NO HAYA ITEMS QUE BORRAR
        if(category === 'experience'){
            dispatch(deleteExperience(checkedList));
        }
        if(category === 'education'){
            console.log(checkedList);
            dispatch(deleteEducation(checkedList));
        }
        if(category === 'skills'){
            dispatch(deleteSkills(checkedList, categorySkill));
        }

        const checkbox = document.querySelectorAll('[name=option]'); //Se borra pero a veces se queda el checkbox marcado, los desmarco 
        checkbox.forEach((input) => input.checked = false);
        setCheckedList([]); //Se inicializa de nuevo a la var de estado
    }

    return(
        <div className='container-delete'>
            {options.category === 'experience' &&
                experience.map((info, index) => {
                    return (
                        <label key={`${index}-deleteexperience`}>
                            <input type='checkbox' name='option' id={index} onChange={handleChecked}/>
                            {`${info.date} ${info.name} ${info.where} ${info.description}`}
                        </label>
                    );
                })
            }  

            {options.category === 'education' &&
                education.map((info, index) => {
                    return (
                        <label key={`${index}-deleteeducation`}>
                            <input type='checkbox' name='option' id={index} onChange={handleChecked}/>
                            {`${info.date} ${info.name} ${info.where}`}
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
                    {skills[options.categorySkill]['list'].map((info, index) => {
                        return (
                            <label key={`${index}-add-${JSON.stringify(options.categorySkill)}`}>
                                <input type='checkbox' name='option' id={index} onChange={handleChecked}/> 
                                {info}
                            </label>
                        );
                    })} 
                </div> 
            }
            <button onClick={handleDelete}>Delete selectioned</button> 
        </div>
    );
}

export default ShowToDelete;
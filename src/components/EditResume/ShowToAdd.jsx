import {useSelector} from 'react-redux';
import './editresume.scss'


const ShowToAdd = () => {
    const {options} = useSelector(state => state);
    const {experience} = useSelector(state => state.experience);
    const {education} = useSelector(state => state.education);
    const {skills} = useSelector(state => state.skills);
    return(
        <div className='container-add'>
            {options.category === 'experience' &&
                experience.map((info, index) => {
                    return (
                        <p key={`${index}-addexperience`}>
                            {`${info.date} / ${info.name}/ ${info.where}/ ${info.description}`}
                        </p>
                    );
                })
            }     
        
            { options.category === 'education' &&
                education.map((info, index) => {
                    return (
                        <p key={`${index}-addeducation`}>
                            {`${info.date} / ${info.name}/ ${info.where}`}
                        </p>
                    );
                }) 
            }

            { options.category === 'skills' && 
                <div>
                    <h2>{skills[options.categorySkill].name}</h2>
                    {skills[options.categorySkill]['list'].map((info, index) => {
                        return (
                            <p key={`${index}-add-${JSON.stringify(options.categorySkill)}`}>
                                {info}
                            </p>
                        );
                    })}
                </div>  
            }
        </div>
    );
}

export default ShowToAdd;
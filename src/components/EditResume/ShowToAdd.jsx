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
                        <div key={`${index}-addexperience`}>
                            <span>{info.date}</span>
                            <span>{info.name}</span>
                            <span>{info.where}</span>
                            <p>{info.description}</p>
                        </div>
                    );
                })
            }     
        
            { options.category === 'education' &&
                education.map((info, index) => {
                    return (
                        <div className='add-span' key={`${index}-addeducation`}>
                            <span>{info.date}</span>
                            <span>{info.name}</span>
                            <span>{info.where}</span>
                        </div>
                    );
                }) 
            }

            { options.category === 'skills' && 
                <div>
                    <h2>{skills[options.categorySkill].name}</h2>
                    {skills[options.categorySkill]['list'].map((info, index) => {
                        return (
                            <div key={`${index}-add-${JSON.stringify(options.categorySkill)}`}>
                                <span>{info}</span>
                            </div>
                        );
                    })}
                </div>  
            }
        </div>
    );
}

export default ShowToAdd;
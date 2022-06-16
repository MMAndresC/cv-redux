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
                        <div key={`${index}-addeducation`}>
                            <span>{info.date}</span>
                            <span>{info.name}</span>
                            <span>{info.where}</span>
                        </div>
                    );
                }) 
            }

            { options.category === 'skills' && 
                <h2>{options.categorySkill}</h2> && //eL h2 NO funciona
                skills[options.categorySkill]['list'].map((info, index) => {
                    return (
                        <p key={`${index}-add-${JSON.stringify(options.categorySkill)}`}>
                            {info}
                        </p>
                    );
                })  
            }
        </div>
    );
}

export default ShowToAdd;
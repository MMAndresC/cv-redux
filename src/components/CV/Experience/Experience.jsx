import {useSelector} from 'react-redux';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import '../resume.scss';

const Experience = () => {
    const {experience} = useSelector(state => state.experience);
    return (
        <div className='container-experience'>
            <SectionSeparator title={'Experience'} />

            {experience.map((info, index) => {
                return (
                    <div className='card-experience' key={`${index}${JSON.stringify(info.name)}`}>
                        <div className='card-experience-header'>
                            <p className='experience-date' >{info.date}</p>
                            <h3 className='experience-name'>{info.name}</h3>
                            <p className='experience-where'>{info.where}</p>
                        </div>
                        <div className='card-description'>
                            <p className='experience-description'>{info.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Experience;
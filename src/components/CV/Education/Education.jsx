import { useSelector } from 'react-redux';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import '../resume.scss';

const Education = () => {
    const { education } = useSelector(state => state.education);
    return (
        <div className='container-education'>
            <SectionSeparator title={'Education'} />

            {education.map((info, index) => {
                return (
                    <div className='card-education' key={`${index}${JSON.stringify(info.name)}`}>
                        <div className='card-education-header'>
                            <p className='education-date' >{info.date}</p>
                            <h3 className='education-name'>{info.name}</h3>
                            <p className='education-where'>{info.where}</p>
                        </div>
                    </div>
                );
            })}
        </div>

    );
}

export default Education;
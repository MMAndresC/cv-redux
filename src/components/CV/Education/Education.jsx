import {useSelector} from 'react-redux';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import '../resume.scss';

const Education = () => {
    const {education} = useSelector(state => state.education);
    return (
        <div className='container-education'>
            <SectionSeparator title={'Education'}/>
        
            {education.map((info, index) => {
                return (
                    <div className='card-education' key = {`${index}${JSON.stringify(info.name)}`}>
                        <div className='card-education-header'>
                            <h3>{info.name}</h3>
                            <p>{info.date}</p>
                        </div>
                        <p>{info.where}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Education;
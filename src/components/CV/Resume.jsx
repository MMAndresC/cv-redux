import {CV} from '../../CV/CVFake';

import {useState} from 'react';

import DataPersonal from './Personal/DataPersonal';
import DescriptionPersonal from './Personal/DescriptionPersonal';
import Header from './Header/Header';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import SectionSeparator from './SectionSeparator/SectionSeparator';
import Skills from './Skills/Skills';

const Resume = () => {
    const {personal, skills, education, experience} = CV;
    const {name, surname, aboutMe, image} = personal; 
    const [showEducation, setShowEducation] = useState(true);
    return (
        <div>
            <Header name={name} surname={surname}/>
            <SectionSeparator/>
            <section>
                <DataPersonal personal={personal}/>
                <DescriptionPersonal aboutMe={aboutMe} image={image}/>
            </section>
            <SectionSeparator/>
            <Skills skills={skills}/>
            <button onClick={() => setShowEducation(true)}>Education</button>
            <button onClick={() => setShowEducation(false)}>Experience</button>
            {showEducation ? <Education education={education}/> : <Experience experience={experience}/>} 
        </div>
    );
}

export default Resume;
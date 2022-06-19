import {CV} from '../../CV/CVFake';

import {useState} from 'react';

import DataPersonal from './Personal/DataPersonal';
import DescriptionPersonal from './Personal/DescriptionPersonal';
import Header from './Header/Header';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import SectionSeparator from './SectionSeparator/SectionSeparator';
import Skills from './Skills/Skills';

import './resume.scss';

const Resume = () => {
    const {personal, skills} = CV;
    const {name, surname, aboutMe} = personal; 
    const [showEducation, setShowEducation] = useState(true);
    return (
        <div className='container-cv'>
            <Header name={name} surname={surname}/>
            <section className='container-cv-personal'>
                <SectionSeparator title={'About Me'}/>
                <section className='container-cv-personal-data'>
                    <DataPersonal personal={personal}/>
                    <DescriptionPersonal aboutMe={aboutMe}/>
                </section>
            </section>
            <SectionSeparator title={'Skills'}/>
            <Skills skills={skills}/>
            <div className='container-btn-show'>
                <button className='btn-show-education' onClick={() => setShowEducation(true)}>Education</button>
                <button className='btn-show-experience' onClick={() => setShowEducation(false)}>Experience</button>
            </div>
            {showEducation ? <Education/> : <Experience/>} 
        </div>
    );
}

export default Resume;
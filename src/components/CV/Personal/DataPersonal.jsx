

import iconGithub from  './icon-github.png'; //'./logo-github.svg'
import iconMail from './icon-mail.svg';

import '../resume.scss';

const DataPersonal = ({personal}) => {
    const { birthDate, city, phone, email, gitHub } = personal;
    return (
        <div className = 'personal-contact'>
            <section className='personal-contact-data'>
                <div className='personal-contact-data-div'>
                    <p>{`Fecha nacimiento: ${birthDate} `}</p>
                    <p>{`Ciudad: ${city}`}</p>
                    <p>{`Telefono: ${phone}`}</p>
                </div>
                <div className = 'personal-contact-logos'>
                    <a href = {`mailto:${email}`}>
                        <img src = {iconMail} alt = {email} className = 'personal-contact-logos-email'/>
                    </a>
                    <a href = {`${gitHub}`}>
                        <img src = {iconGithub} alt = {gitHub} className = 'personal-contact-logos-github'/>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default DataPersonal;
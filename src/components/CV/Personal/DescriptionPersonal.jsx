import image from './undrawreact.svg';
import '../resume.scss';

const DescriptionPersonal = ({aboutMe}) => {
    
    return (
        <div className = 'personal-aboutme'>
            <div className = 'personal-aboutme-image'>
              <img src = {image} alt= 'selfie'/> 
            </div>
            <div className='personal-aboutme-container-data'>
                {aboutMe.map((info, index) => <p key = {`${index}infoAboutMe`}>{info.info}</p>)}
            </div>
        </div>
    );
}

export default DescriptionPersonal;

import './personal.scss';

const DescriptionPersonal = ({aboutMe, image}) => {
    
    return (
        <div className = 'personal-aboutme'>
            <div className = 'personal-aboutme-image'>
              <img src = {image} alt= 'selfie'/> 
            </div>
            <div>
                {aboutMe.map((info, index) => <p key = {`${index}infoAboutMe`}>{info.info}</p>)}
            </div>
        </div>
    );
}

export default DescriptionPersonal;
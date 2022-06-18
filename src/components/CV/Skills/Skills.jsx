import {useSelector} from 'react-redux';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Skills = () => {
    const {skills} = useSelector(state => state.skills);
    const {FSDeveloper, BD, learningLanguages} = skills;
    return (
       <Carousel showThumbs = {false}>
       
            <div>
                {FSDeveloper.list.map((data, index) => 
                    <p key = {`${index}${JSON.stringify(FSDeveloper.name)}`}>{data}</p>)}
                <h3 className ='legend'>{FSDeveloper.name}</h3>
            </div>

            <div>
                {BD.list.map((data, index) => 
                    <p key = {`${index}${JSON.stringify(BD.name)}`}>{data}</p>)}
                <h3 className = 'legend'>{BD.name}</h3>
            </div>
            
            <div>
               {learningLanguages.list.map((data, index) => 
                    <p key = {`${index}${JSON.stringify(learningLanguages.name)}`}>{data}</p>)}
                <h3 className = 'legend'>{learningLanguages.name}</h3>
            </div>
            
       </Carousel>   
    );
}

export default Skills;
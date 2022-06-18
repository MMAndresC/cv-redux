import {useSelector} from 'react-redux';

const Experience = () => {
    const {experience} = useSelector(state => state.experience);
    return (
        <>
            {experience.map((info, index) => {
                return (
                    <div key = {`${index}${JSON.stringify(info.name)}`}>
                        <h3>{info.name}</h3>
                        <p>{info.date}</p>
                        <p>{info.where}</p>
                        <p>{info.description}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Experience;
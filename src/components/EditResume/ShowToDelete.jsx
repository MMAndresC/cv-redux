import {useSelector} from 'react-redux';


const ShowToDelete = () => {
    const {options} = useSelector(state => state);
    const {experience} = useSelector(state => state.experience);
    return(
        <div>
           
        </div>
    );
}

export default ShowToDelete;
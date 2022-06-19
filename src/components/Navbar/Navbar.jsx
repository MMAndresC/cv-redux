import { Routes, Route, NavLink } from 'react-router-dom';

import EditResume from '../EditResume/EditResume';
import Home from '../Home/Home';
import Resume from '../CV/Resume';

import './navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav>
                <NavLink to='/' className='link first'>Home</NavLink>
                <NavLink to='/resume' className='link middle'>Resume</NavLink>
                <NavLink to='/editresume' className='link last'>Edit resume</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/resume' element={<Resume/>} />
                <Route path='/editresume' element={<EditResume/>} />
            </Routes>
        </>
    );


}

export default Navbar;
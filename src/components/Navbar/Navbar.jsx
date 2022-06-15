import { Routes, Route, NavLink } from 'react-router-dom';

import Home from '../Home/Home';
import Resume from '../CV/Resume';

const Navbar = () => {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
                <NavLink to='/editresume'>Edit resume</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/resume' element={<Resume/>} />
            </Routes>
        </>
    );


}

export default Navbar;
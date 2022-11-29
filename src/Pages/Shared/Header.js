import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import banner from '../assets/images/banner.png';

const Header = (props) => {

    const { user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then ( () => {})
        .catch (error => console.error(error))
      }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blogs">Blogs </Link></li>
            {
                user?.uid ?
                <>
                <li> <Link to='/dashboard'> Dashboard </Link></li>
              <li>
              <Link onClick={handleLogOut} > Log Out </Link>
              </li>
                </>
                :
                <>
                <li>
                <Link to="/login">Login</Link>
                </li>
                </>
            }
    </React.Fragment>
    return (
             <div className="navbar bg-base-100">
                <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-secondary rounded-box w-52">
                   {menuItems}
                </ul>
                </div>
                <Link to='/'>
                <img src={banner} width={70} alt="" />
                </Link>
                <Link to='/' className="btn btn-ghost normal-case text-xl">MusEnts </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-secondary">
                   {menuItems}
                    </ul>
                </div>
               
                <label htmlFor='dashboard-drawer' tabIndex={2} className="navbar-end btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
               
            </div>

    );
};

export default Header;
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

import Header from '../Pages/Shared/Header';
import useAdmin from './hooks/useAdmin';


const DashboardLayout = (props) => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin((user?.email))
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
            <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link className='text-secondary font-semibold text-xl' to="/dashboard">My Orders</Link></li>
                        {
                            isAdmin && 
                            <>
                            <li><Link className='text-primary font-semibold text-xl' to="/dashboard/buyers">All Buyers </Link></li>
                            <li><Link className='text-secondary font-semibold text-xl' to="/dashboard/allusers">All Sellers  </Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
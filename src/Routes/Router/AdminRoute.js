import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Layout/hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] =useAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress progress-warning w-56" value="40" max="100"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state ={{from: location}} replace></Navigate>
};

export default AdminRoute;
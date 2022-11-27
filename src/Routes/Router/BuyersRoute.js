import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BuyersRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-warning w-56" value="40" max="100"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state ={{from: location}} replace></Navigate>
};

export default BuyersRoute;
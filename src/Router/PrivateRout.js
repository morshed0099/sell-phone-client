import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const PrivateRout = ({ children }) => {
    let location = useLocation();
    const { user, loader } = useContext(userAuth)
    if (loader) {
    return <div className='flex justify-center items-center'><h1>Loading .....</h1></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default PrivateRout;
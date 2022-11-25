import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const PrivateRout = ({children}) => {
    const {user,loader}=useContext(userAuth)
    const location =useLocation()
     if(loader){
        return <h1>loading</h1>
     }
    if(!user?.email){
        return<Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRout;
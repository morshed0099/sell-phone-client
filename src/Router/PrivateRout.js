import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const PrivateRout = ({children}) => {

    const {user,loader}=useContext(userAuth)
    const location =useLocation()
     if(loader){       
        return <h1 className='flex justify-center mt-28 items-center text-orange-600 font-bold text-1xl'>Loading<span className='text-indigo-600 text-2xl'>.</span> <span className='text-orange-600 text-2xl'>.</span> <span className='text-green-600 text-2xl'>.</span></h1>;
     }
    if(!user){      
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
    
};

export default PrivateRout;
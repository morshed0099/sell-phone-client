import React, { useContext } from 'react';
import { userAuth } from '../../../AuthProvider/AuthProvider';


const Dashborad = () => {
    const {user}=useContext(userAuth);


    return (
        <div>
            <h1 className='text-4xl font-bold text-indigo-600 flex justify-center items-center'>wellcom: <span className='text-orange-600'>{user?.displayName}</span></h1>
          
        </div>
    );
};

export default Dashborad;
import React, { useContext } from 'react';
import { userAuth } from '../../../AuthProvider/AuthProvider';


const Dashborad = () => {
    const {user}=useContext(userAuth);

    if(!user.email){
        return<h1 className='flex justify-center items-center text-3xl font-bold'>loading</h1>
    }


    return (
        <div>
            <h1 className='text-4xl font-bold text-indigo-600 flex justify-center items-center'>wellcom: <span className='text-orange-600'>{user?.displayName}</span></h1>
        </div>
    );
};

export default Dashborad;
import React, { useContext } from 'react';
import { userAuth } from '../../../AuthProvider/AuthProvider';


const Dashborad = () => {
    const { user } = useContext(userAuth);

    if (!user.email) {
        return <h1 className='flex justify-center items-center text-3xl font-bold'>loading</h1>
    }


    return (
        <div className='ml-8 mt-8 sticky top-24'>
            <div className="avatar">
                <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='' src={user?.photoURL} />
                </div>
            </div>
            <h1 className='text-4xl font-bold text-indigo-600 '>wellcom: <span className='text-orange-600'>{user?.displayName}</span></h1>
            <h1 className='text-4xl font-bold text-indigo-600 '>Your: <span className='text-orange-600'> DashBoard</span></h1>

        </div>
    );
};

export default Dashborad;

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const { user,logOut, loading } = useContext(userAuth);
    const [isAdmin, isAdminLoader] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoader) {
        return <h1>loading</h1>
        }

    if (user && isAdmin) {
        return children;
    }
       
    return (<>
       {
        toast.success('to access admin route login admin email ')        
       }
       {
        logOut()
       }
    </>)
};

export default AdminRoute;
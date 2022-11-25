import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth'


 export const userAuth=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    console.log(user,'adfadfaf')
      const auth=getAuth(app);
    const createUserEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }   
    const updateUserInfo=(userUpdateData)=>{
        return updateProfile(auth.currentUser,userUpdateData)
    }  
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currenUser)=>{
            setUser(currenUser)
        })
        return ()=>unsubscribe();
    },[])
    const authInfo={
        createUserEmail,
        updateUserInfo,
    }
    return (
        <div>
            <userAuth.Provider value={authInfo}>
                    {children}
            </userAuth.Provider>
        </div>
    );
};

export default AuthProvider;
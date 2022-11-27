import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


 export const userAuth=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loader,setLoader]=useState(true)
    console.log(user,'adfadfaf')
      const auth=getAuth(app);
      const googleAuth=new GoogleAuthProvider()
    const createUserEmail=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }   
    const updateUserInfo=(userUpdateData)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,userUpdateData)
    }
    const loginEmail=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }  
      const logOut=()=>{
        setLoader(true)
       return signOut(auth)
    }
    const signWithGoogle =()=>{
      return signInWithPopup(auth,googleAuth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currenUser)=>{
            setUser(currenUser)
            setLoader(false)
        })
        return ()=>unsubscribe();
    },[])
    const authInfo={
        createUserEmail,
        updateUserInfo,
        logOut,
        user,
        loginEmail,
        loader,
        signWithGoogle,
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
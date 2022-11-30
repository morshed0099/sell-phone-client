import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useQuery } from 'react-query';


 export const userAuth=createContext();
    const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [singuser,setSignUser]=useState('')
    const [loader,setLoader]=useState(true) 
   
     useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setSignUser(data))
     },[user?.email])
     console.log(singuser,'line 18');
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
        singuser,
     
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
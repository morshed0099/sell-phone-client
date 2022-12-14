import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useQuery } from 'react-query';
import { data } from 'autoprefixer';


 export const userAuth=createContext();
    const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [singuser,setSignUser]=useState('')
    const [loader,setLoader]=useState(true)
   

    
      const auth=getAuth(app);
      const googleAuth=new GoogleAuthProvider()
    const createUserEmail=(email,password)=>{       
        return createUserWithEmailAndPassword(auth,email,password)
    }   
    const updateUserInfo=(userUpdateData)=>{       
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
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoader(false)
        })        
        return ()=>unsubscribe();
    },[])
    useEffect(()=>{
        fetch(`https://sell-phones-server-morshed0099.vercel.app/users?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setSignUser(data))
     },[user?.email])
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
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const singIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{

     const unSubscribe =   onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);

        })
        return()=>{
            unSubscribe();

        }
    },[])



    const authdata ={
        user,
        setUser,
        createUser,
        logOut,
        singIn,
        loading,
        setLoading,


    }
    return <AuthContext value={authdata} >{children}</AuthContext>;
};

export default AuthProvider;
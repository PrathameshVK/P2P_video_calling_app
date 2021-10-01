import React, { useContext, useState, useEffect, createContext } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../firebase';


const AuthContext=createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth);
    }

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe;
    }, [])

    const value={
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

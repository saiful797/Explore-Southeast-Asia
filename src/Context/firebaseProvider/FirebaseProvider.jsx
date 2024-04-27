import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

// Context
export const AuthContext = createContext(null);

// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); 


const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // Create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update user profile with name and imageURL
    const updateUserProfile =(name, imageURL) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: imageURL,
        })
    }

    // Login Process
    // User sign in (Log in with email and password)
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google pop up log in
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    // Github pop up log in
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    // Logout Process
    const logout =()=>{
        setUser(null);
        {
            <Link to='/'></Link>
            location.reload();
        }
        return signOut(auth);
    }

    // Observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
        });

        return () => unsubscribe();
    })

    const allValues ={
        createUser,
        updateUserProfile,
        singInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
    }


    return (
        
        <AuthContext.Provider value = {allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node,
}
export default FirebaseProvider;
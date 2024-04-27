import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";


// Context
export const AuthContext = createContext(null);


const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // Create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update user profile
    const updateUserProfile =(name, imageURL) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: imageURL
        })
    }

    // Logout
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
    children: PropTypes.node
}
export default FirebaseProvider;
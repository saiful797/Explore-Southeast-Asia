import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


// Context
export const AuthContext = createContext(null);


const FirebaseProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const allValues ={
        createUser,
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
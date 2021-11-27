import React, { createContext } from 'react';
import useFirebase from '../Hook/useFirebase';
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
    const allContext = useFirebase();
    return (

        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProviders';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
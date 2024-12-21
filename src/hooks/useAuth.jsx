import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider.jsx';

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
};

export default useAuth;
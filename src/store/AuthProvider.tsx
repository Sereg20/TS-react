import React, {useState} from 'react';
import AuthContext from "./auth-context";
import { IAuthContext } from "../model";

interface IAuthProviderProps {
    children: React.ReactNode 
}

const AuthProvider = ({children}: IAuthProviderProps) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const login = () => {
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };

    const value: IAuthContext = {
        isAuth,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
import React from 'react';
import { IAuthContext } from '../model';


const initialContext: IAuthContext = {
    isAuth: false,
    login: () => {},
    logout: () => {},
};

const AuthContext = React.createContext(initialContext);

export default AuthContext;
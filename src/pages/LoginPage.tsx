import {FC, useContext} from 'react';
import { ILoginData } from '../model';
import AuthContext from '../store/auth-context'; 
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate, redirect } from 'react-router-dom'

const LoginPage: FC = () => {

    const ctx = useContext(AuthContext);
    const navigate = useNavigate();

    const submitForm = (data: ILoginData): void => {
        console.log(data)
        ctx.login();
        navigate('/');
    };

    return (
        <div className='LoginPage'>
            <LoginForm submit={submitForm}/>
        </div>
    );
};

export default LoginPage;

export const action = async () => {
    //authorize
    redirect('/');
}
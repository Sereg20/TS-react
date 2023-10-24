import React, { FC, useState } from "react";
import cl from './LoginForm.module.css';
import { ILoginData } from "../../model";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ChangeMode from "../ChangeMode/ChangeMode";
import { Mode } from "../../model";
import useInput from "../../hooks/input-hook";
import { validateFunctionType } from "../../model";
import { useNavigate } from 'react-router-dom'


interface LoginFormProps {
    submit: (data: ILoginData) => void;
}

const LoginForm: FC<LoginFormProps> = ({submit}) => {
    const [mode, setMode] = useState<Mode>(Mode.SignUp);
    const navigate = useNavigate();

    const validateUserName: validateFunctionType = (value) => {
        return value.length >= 3;
    };

    const validatePassword: validateFunctionType = (value) => {
        return value.length >= 8;
    };

    const {
        value: username,
        inputChangeHandler: usernameChangeHandler,
        isValid: isUsernameValid,
        isValueValid: isUsernameValueValid,
        blurHandler: onUsernameBlur,
        resetValue: usernameReset
    } = useInput(validateUserName);

    const {
        value: password,
        inputChangeHandler: passwordChangeHandler,
        isValid: isPasswordValid,
        isValueValid: isPasswordValueValid,
        blurHandler: onPasswordBlur,
        resetValue: passwordReset
    } = useInput(validatePassword);

    const isFormValid = isUsernameValueValid && isPasswordValueValid;


    const formTitle: string = mode === Mode.SignIn ? 'Sign In' : 'Sign Up';
    const changeModeTitle: string = mode === Mode.SignUp ? 'Sign In' : 'Sign Up';

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        usernameChangeHandler(e.target.value)
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        passwordChangeHandler(e.target.value);
    };

    const onSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const creds: ILoginData = {
            username,
            password
        };
        usernameReset();
        passwordReset();
        submit(creds);
    };

    const onChangeModeClick = () => {
        if (mode === Mode.SignIn) {
            setMode(Mode.SignUp);
        } else {
            setMode(Mode.SignIn);
        }
    };

    return (
        <form className={cl.form}>
            <h1>{formTitle}</h1>
            <Input onChange={onNameChange} value={username} type="text" isValid={isUsernameValid} onBlur={onUsernameBlur}/>
            <Input onChange={onPasswordChange} value={password} type="password" isValid={isPasswordValid} onBlur={onPasswordBlur}/>
            <Button onClick={onSubmitClick} disabled={!isFormValid}>Submit</Button>
            <div className={cl.changeModeSection}>
                <ChangeMode onClick={onChangeModeClick}>{changeModeTitle}</ChangeMode>
            </div>
        </form>
    );
}

export default LoginForm;
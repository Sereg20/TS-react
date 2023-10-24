import React, {FC} from "react";
import cl from './Input.module.css';

interface InputProps {
    value: string;
    type: string;
    isValid: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}

const Input: FC<InputProps> = ({value, type, isValid, onChange, onBlur}) => {

    const classes: string = isValid ? cl.input : [cl.input, cl.invalid].join(' ');

    return (
        <input className={classes} type={type} value={value} onChange={onChange} onBlur={onBlur}/>
    );
}

export default Input;
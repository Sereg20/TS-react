import React, {FC} from "react";
import cl from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({children, disabled, onClick}) => {

    const classes: string = disabled ? [cl.button, cl.disabled].join(' ') : cl.button;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
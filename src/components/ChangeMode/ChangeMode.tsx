import React, {FC} from "react";
import cl from './ChangeMode.module.css';

interface ChangeModeProps {
    children: React.ReactNode;
    onClick: () => void
}

const ChangeMode: FC<ChangeModeProps> = ({children, onClick}) => {

    return (
        <button className={cl.button} onClick={onClick}>{children}</button>
    );
}

export default ChangeMode;
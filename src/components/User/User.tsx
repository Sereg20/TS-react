import React, { useContext, FC, useState } from "react";
import cl from './User.module.css';
import ContextMenu from "../ContextMenu/ContextMenu";
import AuthContext from "../../store/auth-context";

const User: FC = () => {
    const [isMenuDisplayed, setIsMenuDisplayed] = useState<boolean>(false);
    const ctx = useContext(AuthContext);
    const isAuth = ctx.isAuth;

    const imgPath = isAuth 
        ? `${process.env.PUBLIC_URL}/assets/icons/photo.jpg` 
        :`${process.env.PUBLIC_URL}/assets/icons/question_mark.png`;

    const onUserClick = () => {
        setIsMenuDisplayed(prevState => !prevState);
    };

    const closeContextMenu = () => {
        setIsMenuDisplayed(false);
    };

    return (
        <div className={cl.wrapper}>
            <div className={cl.user} onClick={onUserClick}>
                <img className={cl.img} src={imgPath} alt="logo" />
            </div>
            { isMenuDisplayed && <ContextMenu close={closeContextMenu}/> }
        </div>
    );
};

export default User;
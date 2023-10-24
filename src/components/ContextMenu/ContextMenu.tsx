import { FC, useContext } from "react";
import cl from './ContextMenu.module.css';
import ContextMenuItem from "../ContextMenuItem/ContextMenuItem";

import AuthContext from "../../store/auth-context";
import { IContextMenuItem } from "../../model";

interface ContextMenuProps {
    close: () => void
}

const ContextMenu: FC<ContextMenuProps> = ({close}) => {
    const ctx = useContext(AuthContext);
    const isAuth = ctx.isAuth;

    const singInHandler = () => {
        close();
    };

    const signOutHandled = () => {
        ctx.logout();
        close();
    };

    const userInfoHandler = () => {
        close();
    };

    const contextMenuItems: IContextMenuItem[] = [
        {
            title: 'Sign In',
            isVisible: !isAuth,
            clickHandler: singInHandler
        },
        {
            title: 'Sign Out',
            isVisible: isAuth,
            clickHandler: signOutHandled
        },
        {
            title: 'User Info',
            isVisible: isAuth,
            clickHandler: userInfoHandler
        }
    ];

    return (
        <div className={cl.menu}>
            {contextMenuItems.map((item, index) => {
                if (item.isVisible) {
                    return <ContextMenuItem key={index} title={item.title} onClick={item.clickHandler}/>
                }
            })
            }
        </div>
    );
};

export default ContextMenu;
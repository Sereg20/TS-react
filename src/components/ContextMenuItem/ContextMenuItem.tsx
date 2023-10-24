import { FC, useContext } from "react";
import cl from './ContextMenuItem.module.css';

interface ContextMenuProps {
    title: string,
    onClick: () => void
}

const ContextMenuItem: FC<ContextMenuProps> = ({title, onClick}) => {

    return (
        <div className={cl.item} onClick={onClick}>
            <span>
                {title}
            </span>
        </div>
    );
};

export default ContextMenuItem;
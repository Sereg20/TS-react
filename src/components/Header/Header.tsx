import { FC } from 'react';
import cl from './Header.module.css';

import User from '../User/User';

const Header: FC = () => {

    return (
        <div className={cl.header}>
            <User />
        </div>
    );
};

export default Header;
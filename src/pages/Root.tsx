import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Root: FC = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Root;
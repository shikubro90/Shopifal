import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home Page
            <Outlet />
        </div>
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hook/Auth'

const PrivateOutlet = ({children}) => {

    const auth = useAuth()

    return (
        <div>
                {
                    auth ? <Outlet/> : <Neva      
                }        
        </div>
    );
};

export default PrivateOutlet;
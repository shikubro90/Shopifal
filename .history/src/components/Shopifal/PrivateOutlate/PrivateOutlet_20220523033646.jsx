import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hook/Auth'

const PrivateOutlet = ({children}) => {

    const auth = useAuth()

    return (
        <div>
                {
                    auth ? <Outlet/> : <Navigate/>      
                }        
        </div>
    );
};

export default PrivateOutlet;
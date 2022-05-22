import React from 'react';
import useAuth from '../hook/Auth'

const PrivateOutlet = ({children}) => {

    const auth = useAuth()

    return (
        <div>
                {
                    auth       
                }        
        </div>
    );
};

export default PrivateOutlet;
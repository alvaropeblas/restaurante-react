import React, { useState, createContext } from 'react';
import { defaultUser } from '../hook/useUserAuth';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

// userContext.js
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const defaultUser = {
    created_at: "",
    email: "",
    email_verified_at: null,
    id: 1,
    name: "",
    updated_at: ""
};

export function useUser() {
    const [user, setUser] = useState(defaultUser);

    const login = (userData) => {
        console.log(userData)
        setUser((prevUser) => userData);
        console.log(user)
    };

    const logout = () => {
        setUser(defaultUser);
    };

    return { user, login, logout };
}

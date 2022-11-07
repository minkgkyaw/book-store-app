import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    isAuth: false,
    storeData: () => {},
    logoutHandler: () => {},
});

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkToken = () => {
            try {
                const token = AsyncStorage.getItem('@user_token');
                if (token !== null) {
                    console.log(token);
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
            } catch (err) {
                // error reading value
                console.log(err);
            }
        };

        checkToken();
    }, []);

    const storeData = async token => {
        try {
            await AsyncStorage.setItem('@user_token', token);
            return setIsAuth(true);
        } catch (err) {
            console.log(err);
        }
    };

    const logoutHandler = async () => {
        try {
            console.log('logout');
            await AsyncStorage.removeItem('@user_token');
            setIsAuth(false);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <AuthContext.Provider
            value={{isAuth, storeData, setIsAuth, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

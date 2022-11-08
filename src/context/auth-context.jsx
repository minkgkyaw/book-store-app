import React, {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    isAuth: false,
    storeData: () => {},
    logoutHandler: () => {},
});

const AuthContextProvider = ({children}) => {
    const storeData = async token => {
        try {
            return await AsyncStorage.setItem('@user_token', token);
        } catch (err) {
            console.log(err);
        }
    };

    const logoutHandler = async () => {
        try {
            console.log('logout');
            return AsyncStorage.removeItem('@user_token');
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <AuthContext.Provider value={{storeData, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

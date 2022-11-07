import React from 'react';
import 'react-native-gesture-handler';
import MainNavigation from './navigation/main-navigation';
import AuthContextProvider from './context/auth-context';

const App = () => {
    return (
        <AuthContextProvider>
            <MainNavigation />
        </AuthContextProvider>
    );
};

export default App;

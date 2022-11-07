import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login-screen';
import BooksScreen from '../screen/books-screen';
import SignupScreen from '../screen/signup-screen';
import {AuthContext} from '../context/auth-context';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isAuth ? 'Books' : 'Login'}
                screenOptions={{
                    headerShown: false,
                }}>
                {isAuth ? (
                    <>
                        <Stack.Screen name={'Books'} component={BooksScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name={'Login'} component={LoginScreen} />
                        <Stack.Screen
                            name={'Signup'}
                            component={SignupScreen}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;

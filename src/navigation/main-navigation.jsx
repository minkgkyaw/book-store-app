import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login-screen';
import BooksScreen from '../screen/books-screen';
import SignupScreen from '../screen/signup-screen';
import SplashScreen from '../screen/splash-screen';
import ProfileScreen from "../screen/profile-screen";
import DrawerNavigation from "./drawer-navigation";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Main'}
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name={'Splash'} component={SplashScreen} />
                <Stack.Screen name={'Main'} component={DrawerNavigation} />
                <Stack.Screen name={'Login'} component={LoginScreen} />
                <Stack.Screen name={'Signup'} component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;

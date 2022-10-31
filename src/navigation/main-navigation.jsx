import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login-screen';
import BooksScreen from '../screen/books-screen';
import SingupScreen from '../screen/signup-screen';
import {AuthContext} from '../context/auth-context';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	const {token} = useContext(AuthContext);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={token ? 'Books' : 'Login'}
				screenOptions={{
					headerShown: false,
				}}>
				{token ? (
					<>
						<Stack.Screen name={'Books'} component={BooksScreen} />
					</>
				) : (
					<>
						<Stack.Screen name={'Login'} component={LoginScreen} />
						<Stack.Screen
							name={'Signup'}
							component={SingupScreen}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BooksScreen from '../screen/books-screen';
import ProfileScreen from '../screen/profile-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                options={{
                    title: 'Books Page',
                    drawerLabel: 'Books',
                    drawerActiveTintColor: 'green',
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'book' : 'book-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
                name={'Books'}
                component={BooksScreen}
            />
            <Drawer.Screen
                options={{
                    title: 'Profile Page',
                    drawerLabel: 'Profile',
                    drawerActiveTintColor: 'green',
                    drawerIcon: ({focused, size, color}) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
                name={'Profile'}
                component={ProfileScreen}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

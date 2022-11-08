import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        checkLogin().then(r => r);
    }, []);

    const checkLogin = async () => {
        try {
            const token = await AsyncStorage.getItem('@user_token');
            if (token) {
                return navigation.navigate('Books');
            } else {
                return navigation.navigate('Login');
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <View style={styles.root}>
            <Text style={styles.text}>SplashScreen</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
});

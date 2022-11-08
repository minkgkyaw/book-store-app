import {
    Alert,
    BackHandler,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import axios from 'axios';
import React, {useContext, useEffect, useRef, useState} from 'react';
import CoffeeBg from '../../assets/images/coffee_bg.jpg';
import {AuthContext} from '../context/auth-context';

const LoginScreen = ({navigation}) => {
    const {storeData} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp();
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    const passwordRef = useRef(null);

    const API_URL = 'https://mkk-book-store.herokuapp.com/api/v1/users/login';

    const handleSubmit = async () => {
        Keyboard.dismiss();
        try {
            const response = await axios.post(API_URL, {
                email,
                password,
            });
            await storeData(response.data.data.token);
            return navigation.navigate('Profile');
        } catch (err) {
            Alert.alert(
                `Error - ${err.response.data.status}`,
                err.response.data.message,
            );
            return console.log(err.response.data);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.rootContainer}>
            <View style={[styles.innerContainer]}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <ImageBackground
                        style={{flex: 1, padding: 20}}
                        imageStyle={{opacity: 0.8}}
                        resizeMode={'cover'}
                        source={CoffeeBg}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Hell again!</Text>
                            <Text style={styles.headerText}>Welcome</Text>
                            <Text style={styles.headerText}>back</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <TextInput
                                style={styles.input}
                                defaultValue={email}
                                onChangeText={text => setEmail(text)}
                                returnKeyType={'next'}
                                onSubmitEditing={() =>
                                    passwordRef.current.focus()
                                }
                                autoCapitalize={false}
                                placeholder={'Email Address'}
                            />
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                defaultValue={password}
                                returnKeyType={'next'}
                                ref={passwordRef}
                                onChangeText={text => setPassword(text)}
                                onSubmitEditing={handleSubmit}
                                placeholder={'Password'}
                            />
                            <View style={styles.btnContainer}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={handleSubmit}>
                                    <Text style={styles.btnText}> Login </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.signupContainer}>
                            <Text style={styles.or}>OR</Text>
                            <View style={styles.signupInner}>
                                <Text style={styles.signupHelpText}>
                                    You don't have an account?
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('Signup')
                                    }>
                                    <Text style={styles.signupText}>
                                        Singup
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        // maxHeight: windowHeight,
        // paddingHorizontal: 15,
        // paddingVertical: 10,
    },
    headerContainer: {
        flex: 1,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 35,
        fontFamily: 'Raleway-ExtraBoldItalic',
        color: '#14b8a6',
    },
    formContainer: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        height: 60,
        padding: 10,
        elevation: 3,
        borderColor: '#2dd4bf',
        borderRadius: 10,
        marginVertical: 15,
        fontSize: 20,
        fontFamily: 'PlayfairDisplay-Medium',
    },
    btnContainer: {
        marginTop: 10,
    },
    btn: {
        backgroundColor: '#059669',
        height: 50,
        borderRadius: 20,
        elevation: 10,
    },
    btnText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: '100%',
        color: 'white',
        fontFamily: 'PlayfairDisplay-Medium',
        fontSize: 25,
    },
    signupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    or: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Raleway-BlackItalic',
    },
    signupInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupHelpText: {
        color: 'white',
    },
    signupText: {
        color: '#047857',
        fontSize: 30,
        fontWeight: '900',
    },
});

import {
    Alert,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import axios from 'axios';
import {AuthContext} from '../context/auth-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

const API_URL = 'https://mkk-book-store.herokuapp.com/api/v1/users/register';

const SignupScreen = ({navigation}) => {
    const {loginHandler} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(API_URL, {
                name,
                email,
                password,
            });
            return await loginHandler(response.data.data.token);
        } catch (err) {
            setEmail('');
            setPassword('');
            return Alert.alert(
                'Error on Signup',
                'User already with that email.',
            );
        }
    };

    return (
        <KeyboardAvoidingView style={styles.rootContainer}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.innerContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Hello!</Text>
                        <Text style={styles.headerText}>Signup to</Text>
                        <Text style={styles.headerText}>get started</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            value={name}
                            onChangeText={value => setName(value)}
                            returnKeyType={'next'}
                            onSubmitEditing={() => emailRef.current.focus()}
                            style={styles.input}
                            placeholder={'name'}
                        />
                        <TextInput
                            value={email}
                            onChangeText={value => setEmail(value)}
                            ref={emailRef}
                            returnKeyType={'next'}
                            onSubmitEditing={() => passwordRef.current.focus()}
                            style={styles.input}
                            placeholder={'email'}
                        />
                        <TextInput
                            value={password}
                            onChangeText={value => setPassword(value)}
                            ref={passwordRef}
                            secureTextEntry={true}
                            returnKeyType={'next'}
                            onSubmitEditing={handleSubmit}
                            style={styles.input}
                            placeholder={'password'}
                        />

                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={handleSubmit}>
                                <Text style={styles.btnText}>
                                    Signup{' '}
                                    <Ionicons
                                        size={25}
                                        name={'md-send-sharp'}
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginInner}>
                            <Text style={styles.loginHelpText}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                style={styles.loginBtn}
                                onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.loginBtnText}> Login </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        minHeight: windowHeight,
    },
    innerContainer: {
        flex: 1,
        // minHeight: windowHeight,
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#e2e8f0',
    },
    headerContainer: {
        flex: 1,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 35,
        fontFamily: 'Raleway-ExtraBoldItalic',
        color: '#0d9488',
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
        borderColor: '#0d9488',
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
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginInner: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    loginHelpText: {
        fontSize: 15,
        fontFamily: 'Raleway',
    },
    loginBtn: {
        marginLeft: 4,
    },
    loginBtnText: {
        fontFamily: 'PlayfairDisplay-Regular',
        letterSpacing: 1.3,
        textDecorationLine: 'underline',
        color: '#059669',
    },
});

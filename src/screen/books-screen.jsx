import {
    Button,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/auth-context';

const width = Dimensions.get('window').width;
const BooksScreen = ({navigation}) => {
    const {logoutHandler} = useContext(AuthContext);

    const onLogOut = () => {
        logoutHandler();
        navigation.navigate('Login');
    };

    const book = {
        title: 'API လိုတိုရှင်း',
        author: 'Ei Maung',
        description: 'API လိုတိုရှင်း',
        price: 4,
        uploader: '6358c4ec8642a757599134b434',
        createdAt: '2022-10-26T05:26:04.755Z',
        updatedAt: '2022-10-26T05:26:04.755Z',
        id: '6358c4ec8642a7575991b770',
    };

    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={styles.inner}>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <Image
                            resizeMode={'cover'}
                            style={{width: '100%', height: '90%'}}
                            source={{
                                uri: 'https://res.cloudinary.com/mkk/image/upload/v1658315121/cld-sample-2.jpg',
                            }}
                        />
                        <Text> {book.title} </Text>
                        <Text> By {book.author}</Text>
                        <Text>{book.price}$</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{}} />
                        <Text> {book.title} </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{}} />
                        <Text> {book.title} </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{}} />
                        <Text> {book.title} </Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={{}} />
                        <Text> {book.title} </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default BooksScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        flex: 1,
        width: width,
        padding: 10,
        // justifyContent: 'space-between'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: 150,
        borderWidth: 1,
        padding: 3,
        height: 200,
        marginVertical: 10,
        marginHorizontal: 5,
    },
});

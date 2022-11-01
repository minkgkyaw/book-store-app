import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/auth-context';

const BooksScreen = () => {
  const {logoutHandler} = useContext(AuthContext);
  return (
    <View style={styles.root}>
      <Text>BooksScreen</Text>
      <View>
        <Button title={'Logout'} onPress={logoutHandler} />
      </View>
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
});

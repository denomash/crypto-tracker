import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>What up yo!!!</Text>
      //   <Text>Howz the going?</Text>
      // </View>
      <Provider store={Store}>
        <Text>What up yo!!!</Text>
        <Header />
        <CryptoContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

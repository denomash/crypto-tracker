import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Header />
        <CryptoContainer />
      </Provider>
    );
  }
}

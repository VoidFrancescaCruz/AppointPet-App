/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component, useEffect, componentDidMount} from 'react';
import {View, StyleSheet} from 'react-native';
import {Routes, ScreenRoutes} from './src/Navigation/Routes';
import SplashScreen from 'react-native-splash-screen';

import SignOption from './src/pages/SignOption';
import LogIn from './src/pages/LogIn';
import AdminLog from './src/pages/AdminLog';
import CreateAccount from './src/pages/CreateAccount';
import Profile from './src/pages/Profile';
import List from './src/pages/List';

const App = () => {
  /*useEffect(() => {
      setTimeout(() => {
       // SplashScreen.hide();
      }, 1000);
    });*/
  //SplashScreen.hide();
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};

export default App;
/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#6F4C29',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});*/

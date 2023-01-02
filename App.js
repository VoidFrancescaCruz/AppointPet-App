/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component, useEffect, componentDidMount} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScreenRoutes} from './src/Navigation/Routes';

import SignOption from './src/pages/SignOption';
import LogIn from './src/pages/LogIn';
import AdminLog from './src/pages/AdminLog';
import CreateAccount from './src/pages/CreateAccount';
import Profile from './src/pages/Profile';
import List from './src/pages/List';
import ChangePassword from './src/Screens/ChangePassword';
import VerifyEmail from './src/Screens/VerifyEmail';
import VerifyAccount from './src/Screens/VerifyAccount';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return (
    <View style={{flex: 1}}>
      <ScreenRoutes />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#6F4C29',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

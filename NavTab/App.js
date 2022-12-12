/* eslint-disable react-native/no-inline-styles */
import React, {Component, useEffect, componentDidMount} from 'react';
import {View} from 'react-native';
import Routes from './src/Navigation/Routes';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  /*useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
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

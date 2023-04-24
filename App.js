/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {Component, useEffect, componentDidMount} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
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

import {AuthContext} from './src/components/context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack, {RootStackScreen} from './src/Navigation/RootStack';

// import AsyncStorage from 'react-native';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    Email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          Email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          Email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          Email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );
  let userToken;
  userToken = null;
  const authContext = React.useMemo(
    () => ({
      signIn: async (Email, Password) => {
        // setUserToken('fgkj');
        // setIsLoading(false);

        // alert(Email);
        if (Email?.length != 0 && Password?.length != 0) {
          try {
            userToken = Email;
            await AsyncStorage.setItem('userToken', userToken);
            // console.log('user token: ', userToken);
          } catch (e) {
            // saving error
          }
          // console.log(userToken);
        }
        // console.log('user token: ', userToken);

        dispatch({type: 'LOGIN', id: Email, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          // console.log('user token: ', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      SplashScreen.hide();
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        // console.log('user token: ', userToken);
      } catch (e) {
        // saving error
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});

      // setIsLoading(false);
    }, 1000);
  });

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      {loginState.userToken != null ? (
        <View style={{flex: 1}}>
          <ScreenRoutes />
        </View>
      ) : (
        <RootStackScreen />
      )}
    </AuthContext.Provider>
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

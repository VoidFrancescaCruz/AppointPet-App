/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {ScreenRoutes} from './src/Navigation/Routes';
import {PendingScreen} from './src/Navigation/RoutesAdmin';

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
import {LogBox} from 'react-native';
import {OnboardingStackScreen} from './src/Navigation/OnboardingStack';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  // const [showOnboarding, setShowOnboarding] = useState(false); // Onboarding

  const initialLoginState = {
    isLoading: true,
    Email: null,
    userToken: null,
    isAdmin: null,
    onboarding: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          isAdmin: action.isAdmin,
          onboarding: action.onboardDone,
        };
      case 'LOGIN':
        return {
          ...prevState,
          Email: action.id,
          userToken: action.token,
          isLoading: false,
          isAdmin: action.isAdmin,
          onboarding: action.onboardDone,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          Email: null,
          userToken: null,
          isLoading: false,
          isAdmin: null,
          onboarding: action.onboardDone,
        };
      case 'REGISTER':
        return {
          ...prevState,
          Email: action.id,
          userToken: action.token,
          isLoading: false,
          isAdmin: action.isAdmin,
          onboarding: action.onboardDone,
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
        if (Email?.length != 0 && Password?.length != 0) {
          try {
            userToken = Email;
            await AsyncStorage.setItem('userToken', userToken);
            // isadmin = await AsyncStorage.getItem('isAdmin'); // retrieve string value
            //  console.log(isadmin);
            // const isAdmin = JSON.parse(isAdminString);
            // convert back to original format
            dispatch({
              type: 'LOGIN',
              id: Email,
              token: userToken,
            });
          } catch (e) {
            console.log(e);
          }
        }
      },

      // adminSignIn: async (Email, Password) => {
      //   if (Email?.length != 0 && Password?.length != 0) {
      //     // Verify that user is an admin (example only)
      //     try {
      //       userToken = Email;
      //       await AsyncStorage.setItem('userToken', userToken);
      //     } catch (e) {
      //       console.log(e);
      //     }
      //   }
      //   dispatch({type: 'LOGIN', id: Email, token: userToken});
      // },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('isAdmin');
          // console.log('user token: ', userToken);
          // setShowOnboarding(false); //onboarding
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
      let isadmin;
      let onboarding;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        isadmin = await AsyncStorage.getItem('isAdmin');
        onboarding = await AsyncStorage.getItem('Onboard');

        console.log('onboard?: ', onboarding);
      } catch (e) {
        // saving error
      }
      dispatch({
        type: 'RETRIEVE_TOKEN',
        token: userToken,
        isAdmin: isadmin,
        onboardDone: onboarding,
      });
    }, 1000);
  });

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (loginState.userToken != null) {
    if (loginState.isAdmin === 'admin') {
      // If user is an admin, redirect to the Pending screen
      return (
        <AuthContext.Provider value={authContext}>
          <View style={{flex: 1}}>
            <PendingScreen />
          </View>
        </AuthContext.Provider>
      );
    } else {
      // If user is not an admin, redirect to the app's screens
      return (
        <AuthContext.Provider value={authContext}>
          <View style={{flex: 1}}>
            <ScreenRoutes />
          </View>
        </AuthContext.Provider>
      );
    }
  } else {
    // If user is not signed in, redirect to the authentication screens
    if (loginState.onboarding === null) {
      return (
        <AuthContext.Provider value={authContext}>
          <View style={{flex: 1}}>
            <OnboardingStackScreen />
          </View>
        </AuthContext.Provider>
      );
    } else {
      return (
        <AuthContext.Provider value={authContext}>
          <View style={{flex: 1}}>
            <RootStackScreen />
          </View>
        </AuthContext.Provider>
      );
    }
  }
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

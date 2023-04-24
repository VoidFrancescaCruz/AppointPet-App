/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignOption,
  LogIn,
  CreateAccount,
  AdminLog,
  VerifyAccount,
  VerifyEmail,
  ChangePassword,
  ChangePasswordAdmin} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import Routes from './TabNavigator';
import RoutesAdmin from './TabNavigatorAdmin';

const RootStack = createNativeStackNavigator();


function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={navigationStrings.SIGNOPTION}
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name={navigationStrings.SIGNOPTION}
          component={SignOption}
        />
        <RootStack.Screen
          name={navigationStrings.LOGIN}
          component={LogIn}
        />
        <RootStack.Screen
          name={navigationStrings.CREATEACCOUNT}
          component={CreateAccount}
        />
        <RootStack.Screen
          name={navigationStrings.ADMINLOG}
          component={AdminLog}
        />
        <RootStack.Screen
          name={navigationStrings.VERIFYACCOUNT}
          component={VerifyAccount}
        />
        <RootStack.Screen
          name={navigationStrings.VERIFYEMAIL}
          component={VerifyEmail}
        />
        <RootStack.Screen
          name={navigationStrings.CHANGEPASSWORD}
          component={ChangePassword}
        />
        <RootStack.Screen
          name={navigationStrings.CHANGEPASSADMIN}
          component={ChangePasswordAdmin}
        />
        <RootStack.Screen
          name={navigationStrings.HOME}
          component={Routes}
        />
        <RootStack.Screen
          name={navigationStrings.SERVICES}
          component={Routes}
        />
        <RootStack.Screen
          name={navigationStrings.PENDING}
          component={RoutesAdmin}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}



export {RootStackScreen};

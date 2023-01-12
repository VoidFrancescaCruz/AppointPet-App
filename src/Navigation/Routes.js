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

const Stack = createNativeStackNavigator();


function ScreenRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.SIGNOPTION}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={navigationStrings.SIGNOPTION}
          component={SignOption}
        />
        <Stack.Screen
          name={navigationStrings.LOGIN}
          component={LogIn}
        />
        <Stack.Screen
          name={navigationStrings.CREATEACCOUNT}
          component={CreateAccount}
        />
        <Stack.Screen
          name={navigationStrings.ADMINLOG}
          component={AdminLog}
        />
        <Stack.Screen
          name={navigationStrings.VERIFYACCOUNT}
          component={VerifyAccount}
        />
        <Stack.Screen
          name={navigationStrings.VERIFYEMAIL}
          component={VerifyEmail}
        />
        <Stack.Screen
          name={navigationStrings.CHANGEPASSWORD}
          component={ChangePassword}
        />
        <Stack.Screen
          name={navigationStrings.CHANGEPASSADMIN}
          component={ChangePasswordAdmin}
        />
        <Stack.Screen
          name={navigationStrings.HOME}
          component={Routes}
        />
        <Stack.Screen
          name={navigationStrings.SERVICES}
          component={Routes}
        />
        <Stack.Screen
          name={navigationStrings.PENDING}
          component={RoutesAdmin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export {ScreenRoutes};

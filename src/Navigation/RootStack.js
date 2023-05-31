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
import SendOTPAdmin from '../Screens/SendOTPAdmin';
import SendOTP from '../Screens/SendOTP';
import VerifyEmailAdmin from '../Screens/VerifyEmailAdmin';
import About from '../Screens/About/About';
import OnboardingA from '../Screens/OnboardingA';
import OnboardingB from '../Screens/OnboardingB';
import OnboardingC from '../Screens/OnboardingC';
import OnboardingD from '../Screens/OnboardingD';

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
          name={navigationStrings.VERIFYEMAILADMIN}
          component={VerifyEmailAdmin}
        />
        <RootStack.Screen
          name={navigationStrings.SENDOTP}
          component={SendOTP}
        />
        <RootStack.Screen
          name={navigationStrings.SENDOTPADMIN}
          component={SendOTPAdmin}
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
          name={navigationStrings.ABOUT}
          component={About}
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
          name={navigationStrings.PROFILE}
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

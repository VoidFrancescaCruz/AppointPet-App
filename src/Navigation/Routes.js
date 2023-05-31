/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import navigationStrings from '../constants/navigationStrings';
import Routes from './TabNavigator';
import RoutesAdmin from './TabNavigatorAdmin';
import { About } from '../Screens';

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
          name={navigationStrings.HOME}
          component={Routes}
        />
        <Stack.Screen
          name={navigationStrings.SERVICES}
          component={Routes}
        />
        <Stack.Screen
          name={navigationStrings.ABOUT}
          component={About}
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

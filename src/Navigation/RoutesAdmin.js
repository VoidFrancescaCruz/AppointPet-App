/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import navigationStrings from '../constants/navigationStrings';
import Routes from './TabNavigator';
import RoutesAdmin from './TabNavigatorAdmin';

const Stack = createNativeStackNavigator();


function PendingScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.SIGNOPTION}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={navigationStrings.PENDING}
          component={RoutesAdmin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export {PendingScreen};

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Services, Appointment, Profile} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import {Image} from 'react-native';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.white,
          tabBarInactiveBackgroundColor: colors.white,
          tabBarActiveBackgroundColor: colors.primary,
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return <Image style = {{
                tintColor: focused ? colors.white : colors.primary,
                height: focused ? 20 : 30,
                width: focused ? 20 : 30,
              }} source={imagePath.icHome} />;
            },
            /*tabBarLabel: ({focused}) => {
              return <Text style = {{
                tintColor: focused ? colors.white : colors.white,
                opacity: focused ? 1 : 0,
              }} />;
            },*/
          }}
        />
        <Tab.Screen
          name={navigationStrings.SERVICES}
          component={Services}
          options={{
            tabBarIcon: ({focused}) => {
              return <Image style = {{
                tintColor: focused ? colors.white : colors.primary,
                height: focused ? 20 : 30,
                width: focused ? 20 : 30,
              }} source={imagePath.icServices} />;
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.APPOINTMENT}
          component={Appointment}
          options={{
            tabBarIcon: ({focused}) => {
              return <Image style = {{
                tintColor: focused ? colors.white : colors.primary,
                height: focused ? 20 : 30,
                width: focused ? 20 : 30,
              }} source={imagePath.icAppointment} />;
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return <Image style = {{
                tintColor: focused ? colors.white : colors.primary,
                height: focused ? 20 : 30,
                width: focused ? 20 : 30,
              }}source={imagePath.icProfile} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

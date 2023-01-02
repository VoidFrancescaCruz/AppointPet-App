/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Home, Services, Appointment, Profile} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import {Image, Text} from 'react-native';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 0,
          borderRadius: 10,
          height: '80%',
          width: 'auto',
        },
        tabBarStyle: {
          paddingVertical: 10,
          paddingHorizontal: 10,
          alignItems: 'center',
          width: 'auto',
        },
      }}
    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image style = {{
              tintColor: focused ? colors.white : colors.primary,
              height: focused ? 19 : 30,
              width: focused ? 22 : 30,
              flex: focused ? 1 : 0,
              marginLeft: focused ? 0 : 40,
              marginTop: focused ? -12 : -10,
            }} source={imagePath.icHome} />;
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{
              fontSize: 12,
              color: colors.white,
              opacity: focused ? 1 : 0,
              marginBottom: -12,
              marginTop: -10,
              marginRight: 10,
              fontFamily: 'Poppins-Regular',
            }}>{navigationStrings.HOME}</Text>;
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.SERVICES}
        component={Services}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image style = {{
              tintColor: focused ? colors.white : colors.primary,
              height: focused ? 25 : 35,
              width: focused ? 25 : 35,
              flex: focused ? 1 : 0,
              marginLeft: focused ? 5 : 65,
              marginTop: focused ? -12 : -10,
            }} source={imagePath.icServices} />;
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{
              fontSize: 12,
              color: colors.white,
              opacity: focused ? 1 : 0,
              marginBottom: -12,
              marginTop: -10,
              marginRight: 10,
              fontFamily: 'Poppins-Regular',
            }}>{navigationStrings.SERVICES}</Text>;
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
              flex: focused ? 1 : 0,
              marginLeft: focused ? 2 : 80,
              marginTop: focused ? -10 : -10,
            }} source={imagePath.icAppointment} />;
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{
              fontSize: 10,
              color: colors.white,
              opacity: focused ? 1 : 0,
              marginBottom: -12,
              marginTop: -10,
              marginRight: 2,
              fontFamily: 'Poppins-Regular',
            }}>{navigationStrings.APPOINTMENT}</Text>;
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
              height: focused ? 15 : 30,
              width: focused ? 20 : 30,
              flex: focused ? 1 : 0,
              marginLeft: focused ? 5 : 40,
              marginTop: focused ? -10 : -10,
            }}source={imagePath.icProfile} />;
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{
              fontSize: 12,
              color: colors.white,
              opacity: focused ? 1 : 0,
              marginBottom: -12,
              marginTop: -10,
              marginRight: 15,
              fontFamily: 'Poppins-Regular',
            }}>{navigationStrings.PROFILE}</Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;

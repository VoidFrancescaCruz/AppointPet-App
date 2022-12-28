/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Services, Appointment, Profile, SignOption, LogIn, CreateAccount, AdminLog} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import {Image, Text} from 'react-native';
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
                marginLeft: focused ? 0 : 40,
              }} source={imagePath.icHome} />;
            },
            tabBarLabel: ({ focused }) => {
              return <Text style={{
                fontSize: 12,
                color: colors.white,
                opacity: focused ? 1 : 0,
              }}>{navigationStrings.HOME}</Text>;
            },
            tabBarItemStyle: {
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingVertical: 10,
              paddingHorizontal: 0,
              borderRadius: 10,
              height: '70%',
            },
            tabBarStyle: {
              paddingVertical: 5,
              alignItems: 'center',
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
                height: focused ? 20 : 30,
                width: focused ? 20 : 30,
                marginLeft: focused ? 0 : 55,
              }} source={imagePath.icServices} />;
            },
            tabBarLabel: ({ focused }) => {
              return <Text style={{
                fontSize: 12,
                color: colors.white,
                opacity: focused ? 1 : 0,
              }}>{navigationStrings.SERVICES}</Text>;
            },
            tabBarItemStyle: {
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingVertical: 10,
              paddingHorizontal: 0,
              borderRadius: 10,
              height: '70%',
            },
            tabBarStyle: {
              paddingVertical: 5,
              alignItems: 'center',
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
                marginLeft: focused ? 0 : 80,
              }} source={imagePath.icAppointment} />;
            },
            tabBarLabel: ({ focused }) => {
              return <Text style={{
                fontSize: 12,
                color: colors.white,
                opacity: focused ? 1 : 0,
              }}>{navigationStrings.APPOINTMENT}</Text>;
            },
            tabBarItemStyle: {
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingVertical: 10,
              paddingHorizontal: 0,
              borderRadius: 10,
              height: '70%',
            },
            tabBarStyle: {
              paddingVertical: 5,
              alignItems: 'center',
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
                flex: focused ? 1 : 0,
                marginLeft: focused ? 0 : 40,
              }}source={imagePath.icProfile} />;
            },
            tabBarLabel: ({ focused }) => {
              return <Text style={{
                fontSize: 12,
                color: colors.white,
                opacity: focused ? 1 : 0,
              }}>{navigationStrings.PROFILE}</Text>;
            },
            tabBarItemStyle: {
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              marginHorizontal: 10,
              paddingVertical: 10,
              paddingHorizontal: 0,
              borderRadius: 10,
              height: '70%',
            },
            tabBarStyle: {
              paddingVertical: 5,
              alignItems: 'center',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ScreenRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.SIGNOPTION}
        screenOptions={{headerShown: false}}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {Routes};
export default {ScreenRoutes};

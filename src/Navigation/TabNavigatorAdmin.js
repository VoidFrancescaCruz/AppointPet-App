/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pending, ProfileAdmin, Record, Schedules} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import {Image, Text} from 'react-native';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

function RoutesAdmin() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.PENDING}
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
        name={navigationStrings.PENDING}
        component={Pending}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image style = {{
              tintColor: focused ? colors.white : colors.primary,
              height: focused ? 19 : 30,
              width: focused ? 22 : 30,
              flex: focused ? 1 : 0,
              marginLeft: focused ? 0 : 60,
              marginTop: focused ? -12 : -10,
            }} source={imagePath.icPending} />;
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
            }}>{navigationStrings.PENDING}</Text>;
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.SCHEDULE}
        component={Schedules}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image style = {{
              tintColor: focused ? colors.white : colors.primary,
              height: focused ? 20 : 30,
              width: focused ? 20 : 30,
              flex: focused ? 1 : 0,
              marginLeft: focused ? 5 : 60,
              marginTop: focused ? -12 : -10,
            }} source={imagePath.icAppointment} />;
          },
          tabBarLabel: ({ focused }) => {
            return <Text style={{
              fontSize: 12,
              color: colors.white,
              opacity: focused ? 1 : 0,
              marginBottom: -12,
              marginTop: -10,
              marginRight: 5,
              fontFamily: 'Poppins-Regular',
            }}>Schedule</Text>;
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.RECORD}
        component={Record}
        options={{
          tabBarIcon: ({focused}) => {
            return <Image style = {{
              tintColor: focused ? colors.white : colors.primary,
              height: focused ? 25 : 30,
              width: focused ? 25 : 30,
              flex: focused ? 1 : 0,
              marginLeft: focused ? 2 : 40,
              marginTop: focused ? -10 : -10,
            }} source={imagePath.icRecord} />;
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
            }}>{navigationStrings.RECORD}</Text>;
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILEADMIN}
        component={ProfileAdmin}
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
            }}>Admin</Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default RoutesAdmin;

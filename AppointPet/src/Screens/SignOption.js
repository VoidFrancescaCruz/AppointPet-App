/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';

const SignOption = () => {
  const navigation = useNavigation();
  const onLogInPressed = () => {
    navigation.navigate(navigationStrings.HOME);
  };
  const onSignUpPressed = () => {
    navigation.navigate(navigationStrings.CREATEACCOUNT);
  };
  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <Text style={styles.header}> Book </Text>
        <Text style={styles.header}> an appointment </Text>
        <Text style={styles.header}> now! </Text>
      </View>

      <View style={styles.margin}>
        <Text style={styles.subtitle}>
          {' '}
          Start a journey with your pet and us!{' '}
        </Text>
      </View>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgWhite]}
          onPress={onLogInPressed}>
          <Text style={styles.colorBrown}> Log in </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown, styles.buttonBorder]}
          onPress={onSignUpPressed}>
          <Text style={styles.colorWhite}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F4C29',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
    width: '90%',
    textAlign: 'left',
  },

  subtitle: {
    fontWeight: '200',
    fontSize: 16,
    color: 'white',
  },

  button: {
    width: 175,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerText: {
    textAlign: 'center',
    height: '100%',
  },

  colorBrown: {
    color: '#6F4C29',
  },

  bgBrown: {
    backgroundColor: '#6F4C29',
  },

  buttonBorder: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
  },

  bgWhite: {
    backgroundColor: 'white',
  },

  colorWhite: {
    color: 'white',
  },

  margin: {
    marginTop: 15,
    marginBottom: 15,
  },
});

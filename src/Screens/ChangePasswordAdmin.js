/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';

const ChangePasswordAdmin = () => {
  const navigation = useNavigation();
  const onSavePressed = () => {
    navigation.navigate(navigationStrings.VERIFYEMAIL);
  };
  const onUserLogPressed = () => {
    navigation.navigate(navigationStrings.ADMINLOG);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.margin}>
        <Text style={styles.header}> Change Password </Text>
      </View>

      <KeyboardAvoidingView style={styles.margin}>
        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Email"
          placeholderTextColor="#7A7676"
        />

        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Password"
          placeholderTextColor="#7A7676"
        />

        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Confirm New Password"
          placeholderTextColor="#7A7676"
        />
      </KeyboardAvoidingView>

      <Text style={styles.subtitle}>
        {' '}
        Want to log in?
        <TouchableOpacity onPress={onUserLogPressed}>
          <Text style={[styles.bolder, styles.colorBlack, styles.marginSignIn]}> Sign in here </Text>
        </TouchableOpacity>instead.
      </Text>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown]}
          onPress={onSavePressed}>
          <Text style={[styles.colorWhite, styles.regText]}> Save </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  header: {
    fontSize: 32,
    // fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

  subtitle: {
    // fontWeight: '300',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Poppins-Light',
  },

  bolder: {
    fontFamily: 'Poppins-SemiBold',
  },

  button: {
    width: 175,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorBrown: {
    color: '#6F4C29',
  },

  bgWhite: {
    backgroundColor: 'white',
  },

  bgBrown: {
    backgroundColor: '#6F4C29',
  },

  colorWhite: {
    color: 'white',
  },

  colorBlack: {
    color: 'black',
  },

  margin: {
    marginTop: 15,
    marginBottom: 15,
  },

  inputField: {
    backgroundColor: '#E0E0E0',
    color: 'black',
    height: 40,
    width: 225,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },

  regText: {
    fontFamily: 'Poppins-Regular',
  },

  marginSignIn: {
    marginBottom: -9,
  },
});

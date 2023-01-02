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

const AdminLog = () => {
	const navigation = useNavigation();
  const onForgotPassPressed = () => {
    navigation.navigate(navigationStrings.CHANGEPASSADMIN);
  };
  const onUserLogPressed = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };
  const onSignInPressed = () => {
    navigation.navigate(navigationStrings.PENDING);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.margin}>
        <Text style={styles.header}> Hello, Admin! </Text>
        <Text style={styles.subtitle}> Enter your details here. </Text>
      </View>

      <KeyboardAvoidingView style={styles.margin}>
        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Email"
          placeholderTextColor="#6F4C29"
        />

        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Password"
          placeholderTextColor="#6F4C29"
        />
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={onForgotPassPressed}>
        <Text style={[styles.bolder, styles.colorWhite]}> Forgot Password? </Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        {' '}
        Are you a user?
        <TouchableOpacity onPress={onUserLogPressed}>
          <Text style={[styles.bolder, styles.colorWhite, styles.marginSignIn]}> Log in here </Text>
        </TouchableOpacity>instead.
      </Text>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown, styles.buttonBorder]}
          onPress={onSignInPressed}>
          <Text style={[styles.colorWhite, styles.regText]}> Sign In </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AdminLog;

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
    // fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

  subtitle: {
    // fontWeight: '300',
    fontSize: 14,
    color: 'white',
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

  buttonBorder: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
  },

  colorWhite: {
    color: 'white',
  },

  margin: {
    marginTop: 15,
    marginBottom: 15,
  },

  inputField: {
    backgroundColor: 'white',
    color: '#6F4C29',
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

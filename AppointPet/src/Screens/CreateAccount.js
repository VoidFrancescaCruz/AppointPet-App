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

const CreateAccount = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.margin}>
        <Text style={styles.header}> Create an {'\n'} account </Text>
        <Text style={styles.subtitle}>
          {' '}
          or use your email for registration{' '}
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.margin} behavior="height">
        <TextInput
          style={styles.inputField}
          placeholder="First Name"
          placeholderTextColor="#6F4C29"
        />

        <TextInput
          style={styles.inputField}
          placeholder="Last Name"
          placeholderTextColor="#6F4C29"
        />

        <TextInput
          style={styles.inputField}
          placeholder="Email"
          placeholderTextColor="#6F4C29"
        />

        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="#6F4C29"
        />

        <TextInput
          style={styles.inputField}
          placeholder="Retry Password"
          placeholderTextColor="#6F4C29"
        />
      </KeyboardAvoidingView>

      <Text style={styles.subtitle}>
        {' '}
        Are you an admin?
        <Text style={styles.bolder}> Sign in here </Text>instead.
      </Text>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown, styles.buttonBorder]}>
          <Text style={styles.colorWhite}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;

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
    textAlign: 'center',
  },

  subtitle: {
    fontWeight: '300',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  bolder: {
    fontWeight: '500',
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
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});

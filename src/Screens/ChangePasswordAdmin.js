/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
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
import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePasswordAdmin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const navigation = useNavigation();
  const onSavePressed = () => {
    const InsertAPIURL = 'https://www.appointpet.infinityfreeapp.com/adminForgotpassApp.php'; //API to render signup

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const Data = {
      Email: email,
      Password: password,
    };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data), //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
        alert(response[0].Message); 
        // If data is in JSON => Display alert msg
        console.log('Response:', response);
        if (response && response[0] && response[0].Message === 'Success') {
          navigation.navigate(navigationStrings.ADMINLOG);
        }
      })
      .catch((error) => {
        alert('Error Occured' + error);
      });
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
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Password"
          placeholderTextColor="#7A7676"
          onChangeText={setPassword}
        />

        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Confirm New Password"
          placeholderTextColor="#7A7676"
          onChangeText={setConfirmPass}
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

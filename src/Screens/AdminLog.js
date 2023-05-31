/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import styles from './stylesAdminLog.js';

import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class AdminLog extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      id: '',
      fname: '',
      adminUsername : '',
      adminPassword : '',
      check_textInputChange : false,
      secureTextEntry : true,
      isValidEmail: false,
      isValidPass: false,
    };
  }

  onForgotPassPressed = () => {
    this.props.navigation.navigate(navigationStrings.SENDOTPADMIN);
  };

  onUserLogPressed = () => {
    this.props.navigation.navigate(navigationStrings.LOGIN);  };

    InsertRecord = async () => {
      var Email = this.state.adminUsername;
      var Password = this.state.adminPassword;
    
      if (Email?.length == 0 || Password?.length == 0) {
        alert('Required Field Is Missing!!!');
      } else {
        var APIURL =
          'https://www.appointpet.infinityfreeapp.com/AdminLogApp.php';
    
        var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
    
        var Data = {
          Email: Email,
          Password: Password,
        };
        fetch(APIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data),
        })
          .then((Response) => Response.json())
          .then(async (Response) => {
            alert(Response[0].Message);
            if (Response[0].Message == 'Success') {
              try {
                await AsyncStorage.setItem('userToken', Email);
                await AsyncStorage.setItem('isAdmin', '1');
              } catch (error) {
                console.error('Error saving data: ', error);
              }
              // try {
              //   const email = await AsyncStorage.getItem('userToken');
              //   const isAdmin = await AsyncStorage.getItem('isAdmin');
              //   this.context.signIn(email, Password);
              //   if (isAdmin === 'true') {
              //     this.props.navigation.navigate(navigationStrings.PENDING);
              //   } else {
              //     this.props.navigation.navigate(navigationStrings.SIGNOPTION);
              //   }
              // } catch (error) {
              //   console.error('Error retrieving data: ', error);
              // }
            } else {
              var Email2 = '';
              var Password = '';
              this.context.signIn(Email2, Password);
            }
          })
          .catch((error) => {
            console.error('ERROR FOUND' + error);
          });
      }
    };
    
    

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }


  render() {
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
          onChangeText={adminUsername=>this.setState({adminUsername})}
        />
        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Password"
          placeholderTextColor="#6F4C29"
          secureTextEntry={true}
          onChangeText={adminPassword=>this.setState({adminPassword})}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity>

        <Text style={[styles.bolder, styles.colorWhite]}
          onPress={()=>{
                  this.onForgotPassPressed();
                }}> Forgot Password? </Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        {' '}
        Are you a user?
        <TouchableOpacity  onPress={()=>{
                  this.onUserLogPressed();
                }}>
          <Text style={[styles.bolder, styles.colorWhite, styles.marginSignIn]}> Log in here </Text>
        </TouchableOpacity>instead.
      </Text>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown, styles.buttonBorder]}
          onPress={()=>{
                  this.InsertRecord();
                }}>
          <Text style={styles.colorWhite}> Sign In </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    );
  }
}

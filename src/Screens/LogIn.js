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
import styles from './styles2.js';

import { AuthContext } from '../components/context';

export default class LogIn extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      id: '',
      fname: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidEmail: false,
      isValidPass: false,
    };
  }

  onForgotPassPressed = () => {
    this.props.navigation.navigate(navigationStrings.SENDOTP);
  };

  onAdminLogPressed = () => {
    this.props.navigation.navigate(navigationStrings.ADMINLOG);
  };

  onSignInPressed = () => {
    this.props.navigation.navigate(navigationStrings.CREATEACCOUNT);
  };

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;
    var FName = this.state.fname;
    var Id = this.state.id;

    if (Email.length === 0 || Password.length === 0) {
      alert('Required Field Is Missing!!!');
    } else {
      var APIURL =
        'https://www.appointpet.infinityfreeapp.com/LogIn.php';

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        Email: Email,
        Password: Password,
        FName: FName,
        Id: Id,
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message);
          if (Response[0].Message == 'Success') {
            this.setState({ Id: Response[0].id });
            var Email1 = Response[0].Email;
            this.context.signIn(Email1, Password);
            this.props.navigation.navigate(navigationStrings.HOME);
          } else {
            var Email1 = '';
            var Password = '';
            this.context.signIn(Email1, Password);
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
        <Text style={styles.header}> Log In </Text>
        <Text style={styles.subtitle}> or use your account </Text>
      </View>

      <KeyboardAvoidingView style={styles.margin}>
        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Email"
          placeholderTextColor="#6F4C29"
          onChangeText={email=>this.setState({email})}
        />
        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Password"
          placeholderTextColor="#6F4C29"
          secureTextEntry={true}
          onChangeText={password=>this.setState({password})}
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
        Are you an admin?
        <TouchableOpacity>
          <Text style={[styles.bolder, styles.colorWhite, styles.marginSignIn]}
           onPress={()=>{
                  this.onAdminLogPressed();
                }}> Sign in here </Text>
        </TouchableOpacity>instead.
      </Text>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown, styles.buttonBorder]}
          onPress={()=>{
                  this.InsertRecord();
                }}>
          <Text style={styles.colorWhite}> Log In </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    );
  }
}

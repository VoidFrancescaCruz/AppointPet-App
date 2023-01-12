/* eslint-disable prettier/prettier */
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
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import styles from './stylesAdminLog.js';

export default class AdminLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminUsername : '',
      adminPassword : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  onForgotPassPressed = () => {
    this.props.navigation.navigate(navigationStrings.CHANGEPASSADMIN);  };
  onUserLogPressed = () => {
    this.props.navigation.navigate(navigationStrings.LOGIN);  };


  InsertRecord=()=>{
    var Email = this.state.adminUsername;
    var Password = this.state.adminPassword;

    if ((Email?.length == 0) || (Password?.length == 0)){
      alert('Required Field Is Missing!!!');
    } else {
      var APIURL = 'http://10.0.2.2/AppointPet/src/Screens/AdminLog.php';

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      };

      var Data = {
        Email: Email,
        Password: Password,
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message);
        if (Response[0].Message == 'Success') {
          console.log('true');
          this.props.navigation.navigate(navigationStrings.PENDING);
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error('ERROR FOUND' + error);
      });
    }
  }

  updateSecureTextEntry(){
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

      <TouchableOpacity  onPress={()=>{
                  this.onForgotPassPressed();
                }}>
        <Text style={[styles.bolder, styles.colorWhite]}> Forgot Password? </Text>
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

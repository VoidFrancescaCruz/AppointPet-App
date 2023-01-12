/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
<<<<<<< HEAD
/* eslint-disable prettier/prettier */
=======
>>>>>>> d7c18fa (fuction to class)
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
import styles from './styles2.js';


export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  onForgotPassPressed = () => {
    this.props.navigation.navigate(navigationStrings.CHANGEPASSWORD);  };
  onAdminLogPressed = () => {
    this.props.navigation.navigate(navigationStrings.ADMINLOG);  };
  onSignInPressed = () => {
    this.props.navigation.navigate('CreateAccount');  };

<<<<<<< HEAD
    handleData=async()=>{
      const userId = await AsyncStorage.getItem('id');
      }
=======
>>>>>>> d7c18fa (fuction to class)

  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email?.length == 0) || (Password?.length == 0)){
      alert('Required Field Is Missing!!!');
<<<<<<< HEAD
    }else{
=======
    } else {
>>>>>>> d7c18fa (fuction to class)
      var APIURL = 'http://10.0.2.2/AppointPet/src/Screens/LogIn.php';

      var headers = {
        'Accept' : 'application/json',
<<<<<<< HEAD
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: Email,
        Password: Password
=======
        'Content-Type' : 'application/json',
      };

      var Data = {
        Email: Email,
        Password: Password,
>>>>>>> d7c18fa (fuction to class)
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
<<<<<<< HEAD
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message)
        if (Response[0].Message == 'Success') {
          console.log('true')
=======
        body: JSON.stringify(Data),
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message);
        if (Response[0].Message == 'Success') {
          console.log('true');
>>>>>>> d7c18fa (fuction to class)
          this.props.navigation.navigate(navigationStrings.HOME);
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error('ERROR FOUND' + error);
<<<<<<< HEAD
      })
=======
      });
>>>>>>> d7c18fa (fuction to class)
    }
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
<<<<<<< HEAD
      secureTextEntry: !this.state.secureTextEntry
=======
      secureTextEntry: !this.state.secureTextEntry,
>>>>>>> d7c18fa (fuction to class)
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
<<<<<<< HEAD
                  this.onForgotPassPressed();
=======
                  this.onAdminLogPressed();
>>>>>>> d7c18fa (fuction to class)
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
<<<<<<< HEAD
    
        <View style={styles.margin}>
=======

      <View style={styles.margin}>
>>>>>>> d7c18fa (fuction to class)
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

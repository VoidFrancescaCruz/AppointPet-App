/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity, Button,
  AppRegistry,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import styles from './style';

import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email : '',
      password : '',
      confirmPass : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true,
    };
  }

  InsertRecord=()=>{
    var FirstName = this.state.firstName;
    var LastName = this.state.lastName;
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPass = this.state.confirmPass;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

    if ((FirstName?.length == 0) || (LastName?.length == 0) || (Email?.length == 0) || (Password?.length == 0) || (ConfirmPass?.length == 0)){
      alert('Required Field Is Missing!!!');
    } else if (!(checkEmail).test(Email)){
      alert('invalid email!!!');
    }
    // Password validations
    else if (Password.length < 3){
      alert('Minimum 08 characters required!!!');
    } else if (!((/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/).test(Password))){
      alert('Use atleast 01 special character!!!');
    } else if (((/[ ]/).test(Password))){
      alert("Don't include space in password!!!");
    }
    // } else if (Password !== ConfirmPass){
    //   alert('Password doesnot match!!!');
    // }


    else {
      var InsertAPIURL = 'http://10.0.2.2/master3-april28/AppointPet-App/src/Screens/SignUp.php';   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data), //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
          this.props.navigation.navigate('LogIn');
    })
    .catch((error)=>{
      alert('Error Occured' + error);
    });
    }
  }

  SendEmail=()=>{
    axios.post('http://10.0.2.2/april27/AppointPet-App/src/Screens/SignUp.php', {
      to: 'chelsea.xurpas@gmail.com',
      subject: 'Test email',
      body: 'Hello world!',
      smtpUsername: 'appointpet@gmail.com',
      smtpPassword: 'appoinpet2022',
    })
    .then(response => {
      console.log('Email sent successfully!');
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  }

  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry,
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
    });
  }

  onAdminLogPressed = () => {
    this.props.navigation.navigate(navigationStrings.ADMINLOG);  };


  render() {
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
          onChangeText={firstName=>this.setState({firstName})}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Last Name"
          placeholderTextColor="#6F4C29"
          onChangeText={lastName=>this.setState({lastName})}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Email"
          placeholderTextColor="#6F4C29"
          onChangeText={email=>this.setState({email})}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="#6F4C29"
          secureTextEntry={true}
          onChangeText={password=>this.setState({password})}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Retry Password"
          placeholderTextColor="#6F4C29"
          secureTextEntry={true}
          onChangeText={confirmPass=>this.setState({confirmPass})}
        />
      </KeyboardAvoidingView>

      <Text style={styles.subtitle}>
        {' '}
        Are you an admin?
        <Text style={styles.bolder}
          onPress={()=>{
                  this.onAdminLogPressed();
                }}> Sign in here </Text>instead.
      </Text>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown, styles.buttonBorder]}
          onPress={()=>{
                  this.InsertRecord();
                  this.SendEmail();
                }}>
          <Text style={styles.colorWhite}> Sign Up </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}
}

AppRegistry.registerComponent('Signup', () => Signup);


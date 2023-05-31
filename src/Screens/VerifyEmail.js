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
//THIS IS FOR FORGOT PASSWORD OF THE USER-SIDE

export default class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      otp: '',
      secureTextEntry : true,
      confirmSecureTextEntry : true,
    };
  }

  InsertRecord = () => {
    var Email = this.state.email;
    var Otp = this.state.otp;
    var Id = this.state.id;

    if (Email.length === 0 || Otp.length === 0) {
      alert('Verification Code Field Is Missing!');
    } else {
      var APIURL =
        'https://www.appointpet.infinityfreeapp.com/VerifyEmailApp.php';

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        Email: Email,
        Otp: Otp,
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message);
            this.props.navigation.navigate('ChangePassword');
        })
        .catch((error) => {
          console.error('ERROR FOUND' + error);
        });
    }
  };

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

  render() {
    return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.margin}>
        <Text style={styles.header}> Verification Email </Text>
        <Text style={styles.subtitle}>
          {' '}
          If the email cannot be found on your main box, please check the spam
          folder instead.{' '}
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.margin}>
        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Email"
          placeholderTextColor="#7A7676"
          onChangeText={email=>this.setState({email})}
        />

        <TextInput
          style={[styles.inputField, styles.margin]}
          placeholder="Verification Code"
          placeholderTextColor="#7A7676"
          onChangeText={otp=>this.setState({otp})}
        />
      </KeyboardAvoidingView>

      <View style={styles.margin}>
        <TouchableOpacity
          style={[styles.button, styles.bgBrown]}
          onPress={()=>{this.InsertRecord();}}>
          <Text style={[styles.colorWhite, styles.regText]}> Verify </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    );
  }
}

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
    marginBottom: 20,
    fontFamily: 'Poppins-Medium',
  },

  subtitle: {
    // fontWeight: '300',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 20,
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
});

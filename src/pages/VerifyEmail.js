/*
Coded by John Loyd Adobas
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

  export default class VerifyEmail extends React.Component {
    
    render() {

      return (            

          <KeyboardAvoidingView style={styles.container}>
            <View style={styles.margin}>
              <Text style={styles.header}> Verification Email </Text>
              <Text style={styles.subtitle}> If the email cannot be found on your main box, please check 
              the spam folder instead. </Text> 
            </View>

            <KeyboardAvoidingView style={styles.margin}>
                <TextInput  
                    style={[styles.inputField, styles.margin]}
                    placeholder="Email"
                    placeholderTextColor="#7A7676"
                />

                <TextInput
                    style={[styles.inputField, styles.margin]}
                    placeholder="Verification Code"
                    placeholderTextColor="#7A7676"
                />
            </KeyboardAvoidingView>

            <Text style={styles.subtitle}> Want to log in? 
                <Text style={styles.bolder}> Sign in here </Text>instead. 
            </Text> 

            <View style={styles.margin}>
              <TouchableOpacity style={[styles.button, styles.bgBrown]}>
                <Text style={styles.colorWhite}> Verify </Text>
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
    },

    header: {

      fontSize: 32,
      fontWeight: '500',
      color: 'black',
      textAlign: "center",
      marginBottom: 20,
    },

    subtitle: {

      fontWeight: "300",
      fontSize: 14,
      color: 'black',
      textAlign: "center",
      width: 300,
      marginTop: 10,
      marginBottom: 10,
      lineHeight: 20,
    },

    bolder: {

      fontWeight: "500",
    },

    button: {

      width: 175,
      height: 50,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    colorBrown: {

      color: "#6F4C29",
    },

    bgWhite: {

      backgroundColor: "white",
    },

    bgBrown: {

        backgroundColor: "#6F4C29",
    },

    colorWhite: {

        color: "white",
    },

    margin: {

      marginTop: 15,
      marginBottom: 15,
    },

    inputField: {

        backgroundColor: '#E0E0E0',
        color: "black",
        height: 40,
        width: 225,
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 15,
    },
  })

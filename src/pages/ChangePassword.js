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

  export default class ChangePassword extends React.Component {
    
    render() {

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
                />

                <TextInput
                    style={[styles.inputField, styles.margin]}
                    placeholder="Password"
                    placeholderTextColor="#7A7676"
                />

                <TextInput
                    style={[styles.inputField, styles.margin]}
                    placeholder="Confirm New Password"
                    placeholderTextColor="#7A7676"
                />
            </KeyboardAvoidingView>

            <Text style={styles.subtitle}> Want to log in? 
                <Text style={styles.bolder}> Sign in here </Text>instead. 
            </Text> 

            <View style={styles.margin}>
              <TouchableOpacity style={[styles.button, styles.bgBrown]}>
                <Text style={styles.colorWhite}> Save </Text>
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
    },

    subtitle: {

      fontWeight: "300",
      fontSize: 14,
      color: 'black',
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10,
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
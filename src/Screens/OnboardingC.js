/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import colors from '../constants/colors';
import imagePath from '../constants/imagePath';
const OnboardingC = () => {
  const navigation = useNavigation();
  const onNextPressed = () => {
    navigation.navigate(navigationStrings.ONBOARDINGD);
  };
  const onBackPressed = () => {
    navigation.navigate(navigationStrings.ONBOARDINGB);
  };
  return (
    <View style={styles.container}>

      <View style={styles.margin0}>
        <Text style={styles.header}>
          Displays all your successful appointments.
        </Text>
      </View>

      <View style={styles.margin}>
        <Image source={imagePath.onboardingC} style={styles.image}/>
      </View>

      <View style={styles.margin1}>
        <TouchableOpacity style={styles.btn} onPress={() => {onBackPressed();}}>
            <Text style={styles.btnText1}>BACK</Text>
        </TouchableOpacity>
        <Image source={imagePath.bulletsC} style={styles.bullet}/>
        <TouchableOpacity style={styles.btn} onPress={() => {onNextPressed();}}>
            <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },

  header: {
    fontSize: 25,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },

  margin0: {
    marginTop: '5%',
    marginBottom: '10%',
    width: '90%',
  },

  margin: {
    marginTop: '10%',
    marginBottom: '10%',
    width: '75%',
  },

  margin1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1%',
    marginBottom: 0,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    height: 440,
    width: 190,
    alignSelf: 'center',
  },

  bullet: {
    display: 'flex',
    height: 7,
    width: 75,
    alignSelf: 'center',
  },

  btn: {
    width: 60,
    height: 35,
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 15,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

btnText1: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

});

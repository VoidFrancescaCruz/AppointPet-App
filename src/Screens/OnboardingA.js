/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import colors from '../constants/colors';
import imagePath from '../constants/imagePath';
const OnboardingA = () => {
  const [onboardingStatus, setOnboardingStatus] = useState(false);
  const navigation = useNavigation();
  const onNextPressed = () => {
    navigation.navigate(navigationStrings.ONBOARDINGB);
  };
  const onSkipPressed = () => {
    setOnboardingStatus(true);
    navigation.navigate(navigationStrings.SIGNOPTION);
  };
  return (
    <View style={styles.container}>

      <View style={styles.margin0}>
        <Text style={styles.header}>
          Make an appointment for veterinary visits.
        </Text>
      </View>

      <View style={styles.margin}>
        <Image source={imagePath.onboardingA} style={styles.image}/>
      </View>

      <View style={styles.margin1}>
        <TouchableOpacity style={styles.btn} onPress={() => {onSkipPressed();}}>
            <Text style={styles.btnText1}>SKIP</Text>
        </TouchableOpacity>
        <Image source={imagePath.bulletsA} style={styles.bullet}/>
        <TouchableOpacity style={styles.btn} onPress={() => {onNextPressed();}}>
            <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingA;

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
    marginTop: '10%',
    marginBottom: 0,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    height: 400,
    width: 320,
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

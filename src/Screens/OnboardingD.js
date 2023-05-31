/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import colors from '../constants/colors';
import imagePath from '../constants/imagePath';
const OnboardingD = () => {
  const [onboardingStatus, setOnboardingStatus] = useState(false);
  const navigation = useNavigation();

  const onDonePressed = () => {
    // Update onboarding status
    setOnboardingStatus(true);
    navigation.navigate(navigationStrings.SIGNOPTION);
  };
  const onBackPressed = () => {
    navigation.navigate(navigationStrings.ONBOARDINGC);
  };
  return (
    <View style={styles.container}>

      <View style={styles.margin0}>
        <Text style={styles.header}>
          Review your pet's information and booked appointments by visiting your profile.
        </Text>
      </View>

      <View style={styles.margin}>
        <Image source={imagePath.onboardingD} style={styles.image}/>
      </View>

      <View style={styles.margin1}>
        <TouchableOpacity style={styles.btn} onPress={() => {onBackPressed();}}>
            <Text style={styles.btnText1}>BACK</Text>
        </TouchableOpacity>
        <Image source={imagePath.bulletsD} style={styles.bullet}/>
        <TouchableOpacity style={styles.btn} onPress={() => {onDonePressed();}}>
            <Text style={styles.btnText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },

  header: {
    fontSize: 20,
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
    marginTop: 0,
    marginBottom: 0,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    height: 440,
    width: 185,
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

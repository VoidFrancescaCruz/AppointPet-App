/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import TableAppointment from '../../constants/TableAppointment';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Appointment extends React.Component {
  render() {
  return (
      <View style={styles.container}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}> History of Appointments </Text>
        </View>
        <View style={styles.pageSubTitleContainer}>
          <Text style={styles.pageSubTitle}>The below table displays all your completed appointments at the Veterinary Clinic.</Text>
        </View>

        {/* <Select /> */}

        <TableAppointment />
      </View>
  );
}

}

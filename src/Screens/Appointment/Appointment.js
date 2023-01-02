/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import TableAppointment from '../../constants/TableAppointment';

const Appointment = () => {
  return (
      <View style={styles.container}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}> List of Appointments </Text>
        </View>

        <Select />

        <TableAppointment />
      </View>
  );
};

export default Appointment;

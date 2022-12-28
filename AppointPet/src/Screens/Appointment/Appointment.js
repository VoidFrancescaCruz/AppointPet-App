/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import TableAppointment from '../../constants/TableAppointment';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import { SelectList } from 'react-native-dropdown-select-list';

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

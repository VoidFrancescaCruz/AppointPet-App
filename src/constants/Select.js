/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import colors from './colors';

const Select = () => {
  const [selected, setSelected] = React.useState('');
  const services = [
    {key: '1', value: 'Diagnosis and Therapeutic'},
    {key: '2', value: 'Surgical'},
    {key: '3', value: 'Vaccine'},
    {key: '4', value: 'Consultation'},
    {key: '5', value: 'Laboratory'},
    {key: '6', value: 'Dentistry'},
    {key: '7', value: 'Radiology'},
    {key: '8', value: 'Pharmacy'},
    {key: '9', value: 'Pet Grooming'},
  ];
  const vetTeams = [
    {key: '1', value: 'Dr. Dela Cruz Team 1'},
    {key: '2', value: 'Dr. Dela Cruz Team 2'},
    {key: '3', value: 'Dr. Dela Cruz Team 3'},
  ];
  const month = [
    {key: '1', value: 'January'},
    {key: '2', value: 'February'},
    {key: '3', value: 'March'},
    {key: '4', value: 'April'},
    {key: '5', value: 'May'},
    {key: '6', value: 'June'},
    {key: '7', value: 'July'},
    {key: '8', value: 'August'},
    {key: '9', value: 'September'},
    {key: '10', value: 'October'},
    {key: '11', value: 'November'},
    {key: '12', value: 'December'},
  ];
  return (
      <View style={styles.container}>
        <SelectList
          data={vetTeams}
          setSelected={setSelected}
          boxStyles={{
            backgroundColor: colors.secondary,
            borderRadius: 15,
            height: 35,
            width: 'auto',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          inputStyles={{
            color: colors.primary,
            padding: 0,
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
          }}
          dropdownStyles={{
            backgroundColor: colors.secondary,
            height: 120,
            width: 'auto',
          }}
          dropdownTextStyles={{
            color: colors.primary,
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
          }}
          placeholder="Dr. Dela Cruz Team 1"
        />

        <SelectList
          data={services}
          setSelected={setSelected}
          boxStyles={{
            backgroundColor: colors.secondary,
            borderRadius: 15,
            height: 35,
            width: 110,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          inputStyles={{
            color: colors.primary,
            padding: 0,
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
            flexWrap: 'wrap',
            overflow: 'hidden',
          }}
          dropdownStyles={{
            backgroundColor: colors.secondary,
            height: 300,
            width: 110,
            flexWrap: 'wrap',
          }}
          dropdownTextStyles={{
            color: colors.primary,
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
          }}
          placeholder="Services"
        />

        <SelectList
          data={month}
          setSelected={setSelected}
          boxStyles={{
            backgroundColor: colors.secondary,
            borderRadius: 15,
            height: 35,
            width: 'auto',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          inputStyles={{
            color: colors.primary,
            padding: 0,
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
          }}
          dropdownStyles={{
            backgroundColor: colors.secondary,
            height: 300,
          }}
          dropdownTextStyles={{
            color: colors.primary,
            fontSize: 10,
            fontFamily: 'Poppins-Regular',
          }}
          placeholder="Month"
        />
      </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',

    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(222, 216, 216, 0.8)',
    paddingBottom: 20,
    marginBottom: 10,
    zIndex: 1,
  },
});

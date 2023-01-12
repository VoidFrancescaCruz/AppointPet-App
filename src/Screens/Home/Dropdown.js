/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import colors from '../../constants/colors';

// create a component
const Gender = () => {
  const [selected, setSelected] = React.useState('');
  const gender = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'Female'},
  ];
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
  return (
    <View style={styles.container}>
      <SelectList
				data={gender}
				setSelected={(val) => setSelected(val)}
        save="value"
				boxStyles={{
					backgroundColor: colors.white,
					height: 50,
					width: 225,
					paddingLeft: 15,
					marginTop: 8,
					marginBottom: 8,
				}}
				inputStyles={{
					color: colors.primary,
					fontFamily: 'Poppins-Regular',
				}}
				dropdownStyles={{
					backgroundColor: colors.secondary,
					height: 100,
				}}
				dropdownTextStyles={{
					color: colors.primary,
					fontFamily: 'Poppins-Regular',
				}}
				placeholder= "Pet's Gender"
			/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});

//make this component available to the app
export default Gender;





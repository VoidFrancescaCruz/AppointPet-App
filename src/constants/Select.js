/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from './colors';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: '',
      vet: '',
      month: '',
      chosenIndexS: 0, //Picker
      chosenIndexV: 0, //Picker
      chosenIndexM: 0, //Picker
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.pickerContainer]}>
          <Picker
            style={styles.pickerStyles}
            selectedValue = {this.state.vet}
            mode= "dropdown"
            ellipsizeMode="marquee"
            onValueChange={(itemValue, itemPosition) => this.setState({vet: itemValue, chosenIndexV: itemPosition})}>
            <Picker.Item style={[styles.pickerItemStyles, styles.pickerItemDisable]} label="Veterinarian's Team" value="" enabled={false}/>
            <Picker.Item style={styles.pickerItemStyles} label="Dr. Dela Cruz Team 1" value="Dr. Dela Cruz Team 1"/>
            <Picker.Item style={styles.pickerItemStyles} label="Dr. Dela Cruz Team 2" value="Dr. Dela Cruz Team 2"/>
            <Picker.Item style={styles.pickerItemStyles} label="Dr. Dela Cruz Team 3" value="Dr. Dela Cruz Team 3"/>
          </Picker>
        </View>

        <View style={[styles.pickerContainer]}>
          <Picker
            style={styles.pickerStyles}
            selectedValue = {this.state.service}
            mode= "dropdown"
            onValueChange={(itemValue, itemPosition) => this.setState({service: itemValue, chosenIndexS: itemPosition})}>
            <Picker.Item style={[styles.pickerItemStyles, styles.pickerItemDisable]} label="Services" value="" enabled={false}/>
            <Picker.Item style={styles.pickerItemStyles} label="Diagnosis and Therapeutic" value="Diagnosis and Therapeutic"/>
            <Picker.Item style={styles.pickerItemStyles} label="Surgical" value="Surgical"/>
            <Picker.Item style={styles.pickerItemStyles} label="Vaccine" value="Vaccine"/>
            <Picker.Item style={styles.pickerItemStyles} label="Consultation" value="Consultation"/>
            <Picker.Item style={styles.pickerItemStyles} label="Laboratory" value="Laboratory"/>
            <Picker.Item style={styles.pickerItemStyles} label="Dentistry" value="Dentistry"/>
            <Picker.Item style={styles.pickerItemStyles} label="Radiology" value="Radiology"/>
            <Picker.Item style={styles.pickerItemStyles} label="Pharmacy" value="Pharmacy"/>
            <Picker.Item style={styles.pickerItemStyles} label="Pet Grooming" value="Pet Grooming"/>
          </Picker>
        </View>

        <View style={[styles.pickerContainer]}>
          <Picker
            style={styles.pickerStyles}
            selectedValue = {this.state.service}
            mode= "dropdown"
            onValueChange={(itemValue, itemPosition) => this.setState({service: itemValue, chosenIndexM: itemPosition})}>
            <Picker.Item style={[styles.pickerItemStyles, styles.pickerItemDisable]} label="Month" value="" enabled={false}/>
            <Picker.Item style={styles.pickerItemStyles} label="January" value="January"/>
            <Picker.Item style={styles.pickerItemStyles} label="February" value="February"/>
            <Picker.Item style={styles.pickerItemStyles} label="March" value="March"/>
            <Picker.Item style={styles.pickerItemStyles} label="April" value="April"/>
            <Picker.Item style={styles.pickerItemStyles} label="May" value="May"/>
            <Picker.Item style={styles.pickerItemStyles} label="June" value="June"/>
            <Picker.Item style={styles.pickerItemStyles} label="July" value="July"/>
            <Picker.Item style={styles.pickerItemStyles} label="August" value="August"/>
            <Picker.Item style={styles.pickerItemStyles} label="September" value="September"/>
            <Picker.Item style={styles.pickerItemStyles} label="October" value="October"/>
            <Picker.Item style={styles.pickerItemStyles} label="November" value="November"/>
            <Picker.Item style={styles.pickerItemStyles} label="December" value="December"/>
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontFamily: 'Poppins-Regular',

    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(222, 216, 216, 0.8)',
    paddingBottom: 15,
    marginBottom: 10,
    zIndex: 1,
  },

  pickerContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    overflow: 'hidden',
    fontFamily: 'Poppins-Regular',
    width: 115,
  },

  pickerStyles: {
    height: 50,
    width: 140,
    color: colors.primary,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: -12,
    marginLeft: -10,
  },

  pickerItemStyles: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
  },

  pickerItemDisable: {
    color: colors.black,
  },

  spaceTop: {
    marginTop: 10,
    marginBottom: 10,
  },
});

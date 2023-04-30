/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class TableProfileAdmin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.row]}>
          <Text style={[styles.white, styles.fontMedium, {width: '45%'}]}> Admin Name </Text>
          <Text style={[styles.white, styles.fontMedium, {width: '50%'}]}> Email </Text>
          <Text style={[styles.white, styles.fontMedium, {width: '38%'}]}> Date </Text>
        </View>
        <ScrollView>
          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black1, styles.fontReg]}> ipsumlorem@email.com </Text>
            <Text style={[styles.black2, styles.fontReg]}> 12/07/22 </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '71%',
    overflow: 'scroll',
  },

  headerContainer: {
    backgroundColor: '#6F4C29',
    borderRadius: 10,
    height: 'auto',
    width: '100%',
  },

  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    marginHorizontal: 0,
  },

  borders: {
    borderRadius: 10,
  },

  white: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },

  black: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    width: '30%',
    flexWrap: 'wrap',
  },

  black1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 11,
    width: '45%',
    flexWrap: 'wrap',
  },

  black2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    width: '20%',
    flexWrap: 'wrap',
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

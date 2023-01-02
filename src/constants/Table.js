/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class Table extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.row]}>
          <Text style={[styles.white, styles.fontMedium]}> Name </Text>
          <Text style={[styles.white, styles.fontMedium]}> Pet </Text>
          <Text style={[styles.white, styles.fontMedium]}> Services </Text>
          <Text style={[styles.white, styles.fontMedium]}> Date </Text>
          <Text style={[styles.white, styles.fontMedium]}> Time </Text>
        </View>
        <ScrollView>
          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%', //for Profile
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
  },

  evenRows: {
    backgroundColor: '#E0E0E0',
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
    width: '25%',
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

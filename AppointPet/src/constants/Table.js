/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class Table extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.row]}>
          <Text style={styles.white}> Name </Text>
          <Text style={styles.white}> Pet </Text>
          <Text style={styles.white}> Services </Text>
          <Text style={styles.white}> Date </Text>
          <Text style={styles.white}> Time </Text>
        </View>
        <ScrollView>
          <View style={[styles.row, styles.text]}>
            <Text style={styles.black}> Ipsum {'\n'} Lorem </Text>
            <Text style={styles.black}> Daisy </Text>
            <Text style={styles.black}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text, styles.evenRows]}>
            <Text style={styles.black}> Lorem {'\n'} Ipsum </Text>
            <Text style={styles.black}> Choco </Text>
            <Text style={styles.black}> Vaccine </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text]}>
            <Text style={styles.black}> Ipsum {'\n'} Lorem </Text>
            <Text style={styles.black}> Daisy </Text>
            <Text style={styles.black}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text, styles.evenRows]}>
            <Text style={styles.black}> Lorem {'\n'} Ipsum </Text>
            <Text style={styles.black}> Choco </Text>
            <Text style={styles.black}> Vaccine </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text]}>
            <Text style={styles.black}> Ipsum {'\n'} Lorem </Text>
            <Text style={styles.black}> Daisy </Text>
            <Text style={styles.black}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text, styles.evenRows]}>
            <Text style={styles.black}> Lorem {'\n'} Ipsum </Text>
            <Text style={styles.black}> Choco </Text>
            <Text style={styles.black}> Vaccine </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text]}>
            <Text style={styles.black}> Ipsum {'\n'} Lorem </Text>
            <Text style={styles.black}> Daisy </Text>
            <Text style={styles.black}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text, styles.evenRows]}>
            <Text style={styles.black}> Lorem {'\n'} Ipsum </Text>
            <Text style={styles.black}> Choco </Text>
            <Text style={styles.black}> Vaccine </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text]}>
            <Text style={styles.black}> Ipsum {'\n'} Lorem </Text>
            <Text style={styles.black}> Daisy </Text>
            <Text style={styles.black}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.text, styles.evenRows]}>
            <Text style={styles.black}> Lorem {'\n'} Ipsum </Text>
            <Text style={styles.black}> Choco </Text>
            <Text style={styles.black}> Vaccine </Text>
            <Text style={styles.black}> 12/07/22 </Text>
            <Text style={styles.black}> 1:30PM </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '53%', //for Profile
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
});

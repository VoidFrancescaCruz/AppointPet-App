/*
Coded by John Loyd Adobas
*/

/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Select from '../constants/Select';
import Table from '../constants/Table';

import {StyleSheet, Text, View, Image} from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/icons/Daisy.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>

          <View>
            <Text style={[styles.label, styles.bold]}>
              {' '}
              Name:
              <Text style={styles.light}> Lorem Ipsum </Text>
            </Text>

            <Text style={[styles.label, styles.bold]}>
              {' '}
              Email:
              <Text style={styles.light}> loremipsum@gmail.com </Text>
            </Text>

            <Text style={[styles.label, styles.bold]}>
              {' '}
              Pet Name:
              <Text style={styles.light}> Lorem Ipsum </Text>
            </Text>

            <Text style={[styles.label, styles.bold]}>
              {' '}
              Breed:
              <Text style={styles.light}> Golden Retriever </Text>
            </Text>

            <Text style={[styles.label, styles.bold]}>
              {' '}
              Type:
              <Text style={styles.light}> Dog </Text>
            </Text>
          </View>
        </View>

        <Select />

        <Table />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },

  sectionContainer: {
    width: '100%',
    height: 225,

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#6F4C29',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: 'black',
    marginTop: 8,
    marginBottom: 8,
  },

  bold: {
    fontWeight: '600',
  },

  light: {
    fontWeight: '400',
    fontSize: 12,
    width: 'auto',
  },
});

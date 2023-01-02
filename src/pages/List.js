/*
Coded by John Loyd Adobas
*/

/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Select from '../constants/Select';
import Table from '../constants/Table';

import {StyleSheet, Text, View, Image} from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}> Schedule List </Text>
          <Image
            source={require('../assets/icons/Delete.png')}
            resizeMode="cover"
            style={styles.image}
          />
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

  pageTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },

  pageTitle: {
    fontSize: 20,
    color: '#6F4C29',
    fontWeight: 'bold',
  },

  image: {
    width: 20,
    height: 25,
  },
});

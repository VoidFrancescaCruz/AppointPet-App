/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import Table from '../../constants/Table';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import { SelectList } from 'react-native-dropdown-select-list';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={imagePath.daisy}
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
};

export default Profile;

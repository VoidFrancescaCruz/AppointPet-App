/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import Table from '../../constants/Table';
import imagePath from '../../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

const Profile = () => {
	const navigation = useNavigation();
  const onLogOutPressed = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
      <View style={styles.sectionContainer1}>
        <View style={styles.imageContainer}>
          <Image
            source={imagePath.daisy}
            resizeMode="cover"
            style={styles.image}
          />
        </View>

        <TouchableOpacity style={[styles.btn2, styles.infoContainer]}>
          <Image source={imagePath.icOut} style={styles.image1}/>
          <Text style={[styles.btnText, styles.fontReg, styles.brown]} onPress={onLogOutPressed}> Log Out</Text>
        </TouchableOpacity>
      </View>

        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}> Name: </Text>
            <Text style={styles.light}> Lorem Ipsum </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}> Email: </Text>
            <Text style={styles.light}> loremipsum@gmail.com </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}> Pet Name: </Text>
            <Text style={styles.light}> Lorem Ipsum </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}> Breed: </Text>
            <Text style={styles.light}> Golden Retriever </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}> Type: </Text>
            <Text style={styles.light}> Dog </Text>
          </View>
        </View>
      </View>

      <Select />

      <Table />
    </View>
  );
};

export default Profile;

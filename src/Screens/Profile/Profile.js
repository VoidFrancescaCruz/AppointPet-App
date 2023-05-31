/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import Table from '../../constants/Table';
import imagePath from '../../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from '../../components/context';

export default function Profile() {
  const {signOut} = useContext(AuthContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const navigation = useNavigation();

  const onAboutPressed = () => {
    navigation.navigate(navigationStrings.ABOUT);
  }
  React.useEffect(() => {
    async function fetchUserData() {
      try {
        const email = await AsyncStorage.getItem('userToken');
        const response = await fetch(
          'https://www.appointpet.infinityfreeapp.com/getUserApp.php',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email: email,
            }),
          },
        );
        const data = await response.json();
        if (data.Message === 'Success') {
          setName(`${data.FirstName} ${data.LastName}`);
          setEmail(data.Email);
          setError('');
        } else {
          setError(data.Message);
          setName('');
          setEmail('');
        }
      } catch (error) {
        console.log(error);
        setError('An error occurred');
        setName('');
        setEmail('');
      }
    }
    fetchUserData();
  }, []);

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
        </View>

        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}> Name: </Text>
            <Text style={styles.light}> {name}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}> Email: </Text>
            <Text style={styles.light}> {email} </Text>
          </View>

          <View style={styles.sectionContainer3}>
            <TouchableOpacity style={[styles.btn2, styles.infoContainer]}>
              <Image source={imagePath.icOut} style={styles.image1} />
              <Text
                style={[styles.btnText, styles.fontReg, styles.brown]}
                onPress={() => {
                  signOut();
                }}>
                {' '}
                Log Out
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onAboutPressed();}}>
              <Image source={imagePath.icAbout} style={styles.image2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <Select /> */}

      <Table />
    </View>
  );
}

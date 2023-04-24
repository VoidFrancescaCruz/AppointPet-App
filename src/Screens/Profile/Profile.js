/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import Table from '../../constants/Table';
import imagePath from '../../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = () => {
  const navigation = useNavigation();
  const onLogOutPressed = () => {
    navigation.navigate(navigationStrings.LOGIN);
  };

  const [dataFromAsyncStorage, setDataFromAsyncStorage] = useState(null);
  const [data, setData] = useState([]);

  /*
  // Retrieve data from AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem("Email")
    .then(value => {
      // Use the retrieved email value in your SQL query
      // e.g., send an HTTP request to your PHP file with the email value
      setDataFromAsyncStorage(value);

      fetch('http://10.0.2.2/AppointPet/src/Screens/getUser.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: value }),
      })
        .then(response => response.json())
        .then(responseJson => {
          // Handle the response from the PHP file as needed
          console.log(responseJson);
        })
        .catch(error => {
          console.error('Failed to send request:', error);
        });
    })
    .catch(error => {
      console.error('Failed to retrieve data from AsyncStorage:', error);
    });
  }, []);
  */

  // Retrieve data from AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem('email')
      .then(email => {
        // Use the retrieved email value in your SQL query
        // e.g., send an HTTP request to your PHP file with the email value as a plain string
        fetch('http://10.0.2.2/AppointPet/src/Screens/getUser.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: email, // Send the email value as a plain string
        })
          .then(response => response.json())
          .then(responseJson => {
            // Handle the response from the PHP file as needed
            console.log(responseJson);
          })
          .catch(error => {
            console.error('Failed to send request:', error);
          });
      })
      .catch(error => {
        console.error('Failed to retrieve data from AsyncStorage:', error);
      });
  }, []);

  // Fetch data from PHP script
  useEffect(() => {
    fetch('http://10.0.2.2/AppointPet/src/Screens/getUser.php')
      .then(response => response.json())
      .then(data => {
        // Update component state with the fetched data
        setData(data);
      })
      .catch(error => {
        console.error('Failed to fetch data:', error);
      });
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

          <TouchableOpacity style={[styles.btn2, styles.infoContainer]}>
            <Image source={imagePath.icOut} style={styles.image1} />
            <Text style={[styles.btnText, styles.fontReg, styles.brown]} onPress={onLogOutPressed}> Log Out</Text>
          </TouchableOpacity>
        </View>

        {data.map(row => (
          <View key={row.id}>
            <View style={styles.infoContainer}>
              <Text style={styles.label}> Name: </Text>
              <Text style={styles.light}> {row.firstName} {row.lastName} </Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}> Email: </Text>
              <Text style={styles.light}> {row.email} </Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}> Pet Name: </Text>
              <Text style={styles.light}> {row.petName}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}> Pet Breed: </Text>
              <Text style={styles.light}> {row.petBreed}</Text>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}> Pet Type: </Text>
              <Text style={styles.light}> {row.petType}</Text>
            </View>
          </View>
        ))}
      </View>

      <Select />

      <Table />
    </View>
  );
};

export default Profile;

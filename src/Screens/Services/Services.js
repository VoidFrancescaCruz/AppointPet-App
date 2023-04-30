/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';

const Services = () => {

  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState('');


  useEffect(() => {
    fetch('http://10.0.2.2/master3-april28/AppointPet-App/src/Screens/services.php')
      .then(response => response.json())
      .then(data => {

          data.forEach(item => {
            item.serviceImage = 'data:image/jpeg;base64,' + item.serviceImage;
          });
          console.log(data);
          //console.log(imageData);
          setData(data);
          //setImageData(data[0].imageData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView>
      {/* <View>
        <Text> Four </Text>
      </View> */}
      <View>
        {data.length > 0 ? (
          data.map((item, index) => (
            <View style={styles.row} key={index}>
              <View style={[styles.container, styles.secondary]}>
              <Image source={item.serviceImage} style={styles.normalImg} />
              </View>
              <View style={[styles.container1, styles.secondary]}>
                <Text style={[styles.header0, styles.fontSemiBold]}> {item.serviceName} </Text>
                <Text style={[styles.header1, styles.fontMedium]}> {item.servicePrice}</Text>
                {/* <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
                  {'\t'}{'\t'}{'\t'}  {item.serviceSummary}
                </Text> */}
                <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
                  {'\t'}{'\t'}{'\t'} {item.serviceDescription}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No data found.</Text> )}
      </View>
    </ScrollView>
  );
};

export default Services;

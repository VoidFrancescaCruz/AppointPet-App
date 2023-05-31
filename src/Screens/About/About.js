/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import {withNavigation} from 'react-navigation';

export default class About extends React.Component {
  onClosePressed = () => {
    this.props.navigation.navigate(navigationStrings.PROFILE);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.brown, styles.firstHeight]}>
          <View style={styles.rowLogo}>
            <Image
              source={imagePath.logo}
              style={styles.image}
            />
            <TouchableOpacity style={styles.back} onPress={()=>{this.onClosePressed();}}>
              <Image source={imagePath.icClose} style={{height: 20, width: 20}} />
            </TouchableOpacity>
          </View>
            <Text style={styles.paragraph}>
              AppointPet is a Veterinary Clinic booking system. The project
              concept is to help clients make an appointment for their pets in the
              most efficient way. With an increasing number of clients as they own
              pets in the mid-pandemic, the clinic undergoes a lot of work.{'\n'}{'\n'}

              Tracking reserved appointments from clients may lead to
              time-consuming. People can have a busy schedule on which at times
              they may overlook some of their tasks. An online booking system is
              very much needed where clients are able to view the available date
              and time for making an appointment.{'\n'}{'\n'}

              Clients will receive immediately a notification together with the
              receipt as the booking process was recorded and approved, in order
              that the clients are aware of the payment and the confirmation. In
              addition, a beforehand notification email as a reminder of the
              scheduled appointment.
            </Text>
        </View>

        <View style={styles.secondHeight}>
          <View style={styles.row0}>
            <View style={styles.row}>
              <Image
                source={imagePath.icPhone}
                style={styles.logo}
              />
              <Text style={styles.white}> +63-912-345-6789 </Text>
            </View>

            <View style={styles.row}>
              <Image
                source={imagePath.icFB}
                style={styles.logo}
              />
              <Text style={styles.white}> /appointpet </Text>
            </View>
          </View>
          <View style={styles.row0}>
            <View style={styles.row}>
              <Image
                source={imagePath.icEmail}
                style={styles.logo}
              />
              <Text style={styles.white}>appointpet{'\n'}@gmail.com </Text>
            </View>
            <View style={styles.row}>
              <Image
                source={imagePath.icLocation}
                style={styles.logo}
              />
              <Text style={styles.white}> Manila,{'\n'} Philippines </Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdHeight}>
          <View style={styles.rowDevs2}>
            <Text style={styles.white2}>AppointPet Developers:</Text>
          </View>
          <View style={styles.rowDevs}>
            <View style={styles.column}>
              <Text style={styles.white1}>Adobas,</Text>
              <Text style={styles.white1}>John Loyd</Text>
            </View>
            <View style={styles.column1}>
              <Text style={styles.white1}>Cruz,</Text>
              <Text style={styles.white1}>Francesca</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.white1}>Garcia,</Text>
              <Text style={styles.white1}>Chelsea</Text>
            </View>
          </View>
          <View style={styles.rowDevs2}>
            <Text style={styles.footer}>Copyrights &copy; 2023</Text>
          </View>
        </View>
      </View>
    );
  }
}

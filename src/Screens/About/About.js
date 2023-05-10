import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

    export default class About extends React.Component {

        render() {
            return (
                <View style={styles.container}>
                    <View style={[styles.brown, styles.firstHeight]}>
                        <Image source={require('../assets/icons/logo.png')} style={styles.image}></Image>
                        <Text style={styles.paragraph}>
                            AppointPet is a Veterinary Clinic booking system. The project concept is to help clients make an appointment for their pets in the most efficient way. 
                            With an increasing number of clients as they own pets in the mid-pandemic, the clinic undergoes a lot of work.  
                        </Text>

                        <Text style={styles.paragraph}>
                            Tracking reserved appointments from clients may lead to time-consuming. People can have a busy schedule on which at times they may overlook some of their tasks. 
                            An online booking system is very much needed where clients are able to view the available date and time for making an appointment.
                        </Text>

                        <Text style={styles.paragraph}>
                            Clients will receive immediately a notification together with the receipt as the booking process was recorded and approved, in order that the clients are aware of the payment and the confirmation. 
                            In addition, a beforehand notification email as a reminder of the scheduled appointment. 
                        </Text>
                    </View>
                    
                    <View style={[styles.brown, styles.secondHeight]}>
                        <View style={styles.row}>
                            <Image source={require('../assets/icons/telephone.png')} style={styles.logo}></Image>
                            <Text  style={styles.white} > +63-912-345-6789 </Text>
                        </View>

                        <View style={styles.row}>
                            <Image source={require('../assets/icons/email.png')} style={styles.logo}></Image>
                            <Text style={styles.white}> appointpet@gmail.com </Text>
                        </View>

                        <View style={styles.row}>
                            <Image source={require('../assets/icons/facebook.png')} style={styles.logo}></Image>
                            <Text style={styles.white}> /appointpet </Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Image source={require('../assets/icons/location.png')} style={[styles.logo, {height: 35} ]}></Image>
                            <Text style={styles.white}> Manila, Philippines </Text>
                        </View>
                    </View>
            </View>
            );
        }
    }
  

/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class TableAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      data: null,
    };
  }

  componentDidMount() {
    // Retrieve data from AsyncStorage when the component mounts
    AsyncStorage.getItem('userToken')
      .then(value => {
        this.setState({ data: value }); // Update the state with the retrieved data
  
        var { data } = this.state;
  
        var InsertAPIURL = 'http://10.0.2.2/april21-cesca/AppointPet-App/src/Screens/tableAppoinment.php';
        
        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        };
        var Data = {
          UserAppointment: data,
        };
    
        fetch(InsertAPIURL,{
            method:'POST',
            headers:headers,
            body: JSON.stringify(Data),
        })
        .then((Response)=>Response.json())
        .then((Response)=>{
          // this.props.navigation.navigate(navigationStrings.HOME);
          var Name = Response[0].appointment;
          this.setState({ Name });
        })
        .catch((error)=>{
          alert('Error Occured' + error);
        });
  
      })
      .catch(error => {
        console.error('Failed to retrieve data:', error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.row, styles.fontMedium]}>
          <Text style={[styles.white, styles.fontMedium]}> {this.state.Name} </Text>
          <Text style={[styles.white, styles.fontMedium]}> Pet </Text>
          <Text style={[styles.white, styles.fontMedium]}> Services </Text>
          <Text style={[styles.white, styles.fontMedium]}> Date </Text>
          <Text style={[styles.white, styles.fontMedium]}> Time </Text>
        </View>
        <ScrollView>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.black, styles.fontReg]}> Ipsum {'\n'} Lorem </Text>
            <Text style={[styles.black, styles.fontReg]}> Daisy </Text>
            <Text style={[styles.black, styles.fontReg]}>
              {' '}
              Diagnostic {'\n'} and {'\n'} Therapeutic{' '}
            </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>

          <View style={[styles.row, styles.evenRows]}>
            <Text style={[styles.black, styles.fontReg]}> Lorem {'\n'} Ipsum </Text>
            <Text style={[styles.black, styles.fontReg]}> Choco </Text>
            <Text style={[styles.black, styles.fontReg]}> Vaccine </Text>
            <Text style={[styles.black, styles.fontReg]}> 12/07/22 </Text>
            <Text style={[styles.black, styles.fontReg]}> 1:30PM </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '71%',
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

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

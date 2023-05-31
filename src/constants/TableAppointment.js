/* eslint-disable react-native/no-inline-styles */
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
      email: '',
      message: '',
      firstName: '',
      error: '',
      data: [],
    };
  }


  // componentDidMount() {
  //   // Retrieve data from AsyncStorage when the component mounts
  //   AsyncStorage.getItem('userToken')
  //     .then(value => {
  //       this.setState({ data: value }); // Update the state with the retrieved data

  //       var { data } = this.state;

  //       alert({data});

  //       var InsertAPIURL = 'http://10.0.2.2/AppointPet-App/src/Screens/tableAppoinment.php';

  //       var headers = {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       };
  //       var Data = {
  //         UserAppointment: data,
  //       };

  //       fetch(InsertAPIURL,{
  //           method:'POST',
  //           headers:headers,
  //           body: JSON.stringify(Data),
  //       })
  //       .then((Response)=>Response.json())
  //       .then((Response)=>{
  //         // this.props.navigation.navigate(navigationStrings.HOME);
  //         var Name = Response[0].appointment;
  //         this.setState({ data });
  //       })
  //       .catch((error)=>{
  //         alert('Error Occured' + error);
  //       });

  //     })
  //     .catch(error => {
  //       console.error('Failed to retrieve data:', error);
  //     });
  // }


  // Run the tableAppointment php file when the user opens this page.
  //cescsaa
  // componentDidMount() {
  //   AsyncStorage.getItem('userToken')
  //       .then(value => {
  //         console.log('Value retrieved from AsyncStorage2:', value);

  //         this.setState({ data: value }); // Update the state with the retrieved data

  //         var { data } = this.state;

  //         var InsertAPIURL = 'http://10.0.2.2/AppointPet-App/src/Screens/tableAppoinment.php';

  //         var headers = {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         };
  //         var Data = {
  //           Email: data,
  //         };

  //         fetch(InsertAPIURL,{
  //             method:'POST',
  //             headers:headers,
  //             body: JSON.stringify(Data),
  //         })
  //         .then((response)=>response.json())
  //         .then(data => {
  //           console.log(data); // Debug the response
  //           this.setState({ data });
  //         })
  //         .catch((error)=>{
  //           alert('Error Occured' + error);
  //         });

  //       })
  //       .catch(error => {
  //         console.error('Failed to retrieve data:', error);
  //       });
  // }

  /*
  componentDidMount() {
    AsyncStorage.getItem("params").then(email => {

      console.log('Retrieved email:', email);

      const encodedEmail = encodeURIComponent(email);

      console.log(encodedEmail);

      const encodedURI = encodeURI(`http://10.0.2.2/AppointPet-App/src/Screens/tableAppointment.php?email=${encodedEmail}`);

      console.log(encodedURI);

      fetch(encodedURI)
        .then(response => response.json())
        .then(data => {
          this.setState({ data });
          console.log('Data received:', data);
        })
        .catch(error => console.log(error));
    });
  }
  */

  async componentDidMount() {
    try {
      const email = await AsyncStorage.getItem('userToken');
      this.setState({ email }, () => {
        this.handlePress();
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if rows state has changed
    if (this.state.rows !== prevState.rows) {
      // Fetch data again and update state
      this.handlePress();
    }
  }

  handlePress = () => {
  fetch('https://www.appointpet.infinityfreeapp.com/tableAppointmentApp.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Email: this.state.email,
    }),
  })
  .then((response) => response.json())
  .then(data => {
    // console.log(data);
    if (data.Message === 'Success') {
      this.setState({ rows: data.Rows });
    } else {
      this.setState({ error: data.Message, rows: [] });
    }
  })
  .catch((error) => {
    console.log(error);
    this.setState({ error: 'An error occurred', rows: [] });
  });
};

render() {
  const { rows } = this.state;
  return (
    <View style={styles.container}>
    <View style={[styles.headerContainer, styles.row, styles.fontMedium]}>
      <Text style={[styles.white, styles.fontMedium, {width: '48%'}]}> Name </Text>
      <Text style={[styles.white, styles.fontMedium, {width: '43%'}]}> Pet </Text>
      <Text style={[styles.white, styles.fontMedium, {width: '48%'}]}> Services </Text>
      <Text style={[styles.white, styles.fontMedium, {width: '35%'}]}> Date </Text>
      <Text style={[styles.white, styles.fontMedium, {width: '35%'}]}> Time </Text>
    </View>
    <ScrollView>
   {rows && rows.map((row, index) => (
    <View style={[{backgroundColor: index % 2 === 0 ? '' : '#E0E0E0'}, styles.borders]}>
    <View key={index} style={styles.row}>
      <View style={styles.row}>
        <Text style={[styles.black1, styles.fontReg]}>{row.FirstName}{'\n'}{row.LastName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.black3, styles.fontReg]}>{row.PetName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.black1, styles.fontReg]}>{row.Services}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.black2, styles.fontReg]}>{row.SchedDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.black, styles.fontReg]}>{row.SchedTime}</Text>
      </View>
    </View></View>
  ))}


           </ScrollView>
           </View>
  );
}


}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '82%',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 9,
    paddingBottom: 9,
    marginHorizontal: 0,
  },

  borders: {
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
    width: '35%',
    flexWrap: 'wrap',
  },

  black1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 11,
    width: '49%',
    flexWrap: 'wrap',
  },

  black2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    width: '34%',
    flexWrap: 'wrap',
  },

  black3: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    width: '43%',
    flexWrap: 'wrap',
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

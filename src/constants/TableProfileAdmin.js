/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class TableProfileAdmin extends React.Component {
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
    // console.log('Email:', this.state.email);
    fetch('https://www.appointpet.infinityfreeapp.com/getAdminNameApp.php', {
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
      // process appointment history response
      if (data.Message === 'Success') {
        this.setState({ rows: data.Rows });
      } else {
        this.setState({ error: data.Message, rows: [] });
      }
    })
    .catch((error) => {
      console.log('hi:', error);
      this.setState({ error: 'An error occurred', rows: [] });
    });
  };
  
  
  render() {

    const { rows } = this.state;
    return (
      <View>
      <View style={styles.container}>
      <View style={[styles.headerContainer, styles.row, styles.fontMedium]}>
          <Text style={[styles.white, styles.fontMedium, {width: '50%'}]}> Email </Text>
    </View>
      <ScrollView>
      {rows && rows.map((row, j) => (
        <View style={[{backgroundColor: j % 2 === 0 ? '' : '#E0E0E0'}, styles.borders]}>

          <View key={j} style={styles.row}>
            <View style={styles.row}>
              <Text style={[styles.black3, styles.fontReg]}>{row.LastName}</Text>
            </View>
            </View>
          </View>
      ))}
      </ScrollView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
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
    paddingTop: 8,
    paddingBottom: 8,
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
    width: '30%',
    flexWrap: 'wrap',
  },

  black1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 11,
    width: '45%',
    flexWrap: 'wrap',
  },

  black2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    width: '20%',
    flexWrap: 'wrap',
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

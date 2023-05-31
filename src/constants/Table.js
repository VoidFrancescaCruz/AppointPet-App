/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Table extends React.Component {
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

    fetch('https://www.appointpet.infinityfreeapp.com/getPetNameApp.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: this.state.email,
      }),
    })
    .then((response_pet) => response_pet.json())
    .then(data => {
      // process pet names response
      if (data.Message === 'Success') {
        this.setState({ rows_pet: data.Rows });
      } else {
        this.setState({ error: data.Message, rows_pet: [] });
      }
    })
    .catch((error) => {
      console.log('hi:', error);
      this.setState({ error: 'An error occurred', rows_pet: [] });
    });

    fetch('https://www.appointpet.infinityfreeapp.com/getProfileApp.php', {
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
    const { rows_pet } = this.state;
    const { rows } = this.state;

    return (
      <View>
        <View style={styles.container}>
          <View style={[styles.headerContainer, styles.row, styles.fontMedium]}>
            <Text style={[styles.white, styles.fontMedium]}> Pet Name </Text>
            <Text style={[styles.white, styles.fontMedium]}> Gender </Text>
            <Text style={[styles.white, styles.fontMedium]}> Breed </Text>
            <Text style={[styles.white, styles.fontMedium]}> Type </Text>
          </View>
          <ScrollView>
          {rows_pet && rows_pet.map((row, i) => (
            <View style={[{backgroundColor: i % 2 === 0 ? '' : '#E0E0E0'}, styles.borders]}>

              <View key={i} style={styles.row}>
                <View style={styles.row}>
                  <Text style={[styles.black1, styles.fontReg]}>{row.PetName_pet}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.black1, styles.fontReg]}>{row.PetGender_pet}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.black1, styles.fontReg]}>{row.PetBreed_pet}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.black1, styles.fontReg]}>{row.PetType_pet}</Text>
                </View>
              </View>
            </View>
          ))}
          </ScrollView>
        </View>
        <Text style={[styles.black4, styles.row, styles.fontBlack]}> A P P O I N T M E N T S </Text>
        <View style={styles.container}>
          <View style={[styles.headerContainer, styles.row, styles.fontMedium]}>
          <Text style={[styles.white, styles.fontMedium, {width: '48%'}]}> Name </Text>
          <Text style={[styles.white, styles.fontMedium, {width: '43%'}]}> Pet </Text>
          <Text style={[styles.white, styles.fontMedium, {width: '48%'}]}> Services </Text>
          <Text style={[styles.white, styles.fontMedium, {width: '35%'}]}> Date </Text>
          <Text style={[styles.white, styles.fontMedium, {width: '35%'}]}> Time </Text>
        </View>
          <ScrollView>
          {rows && rows.map((row, j) => (
            <View style={[{backgroundColor: j % 2 === 0 ? '' : '#E0E0E0'}, styles.borders]}>

              <View key={j} style={styles.row}>
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
    height: '38%',
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
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 0,
  },

  borders: {
    borderRadius: 10,
  },

  white: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    width: '48%',
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
    width: '48%',
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

  black4: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    width: '100%',
    flexWrap: 'wrap',
    textShadowColor: 'light-gray',
    textShadowOffset: {width: -3, height: 3 },
    textShadowRadius: 1,
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },

  fontBlack: {
    fontFamily: 'Poppins-Black',
  },
});

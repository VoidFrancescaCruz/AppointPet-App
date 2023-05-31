/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
  TextInput
} from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import TableProfileAdmin from '../../constants/TableProfileAdmin';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileAdmin() {
  const { signOut } = useContext(AuthContext);
  const [emailP, setEmailP] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [check_textInputChange, setCheck_textInputChange] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const [isVisible, setIsVisible] = useState(false); //state of modal default false
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const navigation = useNavigation();

  const InsertRecord = () => {
    const checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

    if ((email?.length === 0) || (password?.length === 0) || (confirmPass?.length === 0)) {
      alert('Required Field Is Missing!!!');
    } else if (!checkEmail.test(email)) {
      alert('Invalid email!!!');
    }
    // Password validations
    else if (password.length < 3) {
      alert('Minimum 3 characters required!!!');
    } else if (!(/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/).test(password)) {
      alert('Use at least 01 special character!!!');
    } else if ((/[ ]/).test(password)) {
      alert("Don't include space in password!!!");
    }
    else if (password !== confirmPass){
      alert('Password does not match!!!');
    }

    else {
      const InsertAPIURL = 'https://www.appointpet.infinityfreeapp.com/AdminSignUpApp.php'; //API to render signup

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      const Data = {
        Email: email,
        Password: password,
      };

      // FETCH func ------------------------------------
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data), //convert data to JSON
      })
        .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          alert(response[0].Message); // If data is in JSON => Display alert msg
          // navigation.navigate('AdminLog');
        })
        .catch((error) => {
          alert('Error Occured' + error);
        });
    }
  };

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleCoupdateConfirmSecureTextEntrynfirmSecureTextEntry = () => {
    setConfirmSecureTextEntry(!confirmSecureTextEntry);
  };

  const onLogOutPressed = () => {
    navigation.navigate(navigationStrings.ADMINLOG);
  };

  React.useEffect(() => {
    async function fetchUserData() {
      try {
        const emailP = await AsyncStorage.getItem('userToken');
        const response = await fetch(
          'https://www.appointpet.infinityfreeapp.com/getAdminProfileApp.php',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email: emailP,
            }),
          },
        );
        const data = await response.json();
        if (data.Message === 'Success') {
          setName(`${data.FirstName} ${data.LastName}`);
          setEmailP(data.Email);
          setError('');
        } else {
          setError(data.Message);
          setName('');
          setEmailP('');
        }
      } catch (error) {
        console.log(error);
        setError('An error occurred');
        setName('');
        setEmailP('');
      }
    }
    fetchUserData();
  }, []);
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={imagePath.daisy}
              resizeMode="cover"
              style={styles.image}
            />
          </View>

          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}> Email: </Text>
              <Text style={styles.light}> {emailP} </Text>
            </View>
          </View>
        </View>

        <View>
        <Modal
          animationType = {'fade'}
          transparent = {true}
          visible = {isVisible}
          onRequestClose = {() =>{ console.log('Modal has been closed.'); } }>
          {/*All views of Modal*/}
            <View style={styles.modalContainer}>
              <View style={styles.headerModal}>
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                  <Image source={imagePath.icClose} style={{height: 20, width: 20}} />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View>
                  <Text style={[styles.header0, styles.fontSemiBold, styles.white, {textAlign: 'center'}]}>Add an Admin!</Text>
                  <KeyboardAvoidingView style={styles.margin}>
                    <TextInput
                      style={[styles.inputField, styles.fontReg, styles.margin]}
                      placeholder="Email"
                      placeholderTextColor={colors.primary}
                      onChangeText={setEmail}
                    />
                    <TextInput
                      style={[styles.inputField, styles.fontReg, styles.margin]}
                      placeholder="Password"
                      placeholderTextColor={colors.primary}
                      secureTextEntry={true}
                      onChangeText={setPassword}
                    />
                    <TextInput
                      style={[styles.inputField, styles.fontReg, styles.margin]}
                      placeholder="Retry Password"
                      placeholderTextColor={colors.primary}
                      secureTextEntry={true}
                      onChangeText={setConfirmPass}
                    />
                  </KeyboardAvoidingView>
                </View>
                <View style={styles.margin}>
                  <TouchableOpacity
                    style={[styles.button, styles.fontReg]}
                    onPress={InsertRecord}>
                    <Text style={styles.white}> Sign Up </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
        </Modal>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.btn, styles.primary]}>
              <Text style={[styles.btnText, styles.fontReg, styles.white]} onPress={() => setIsVisible(true)}> + Add an Admin</Text>
            </TouchableOpacity>
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
            
          </View>
        </View>

        <TableProfileAdmin />
      </View>
    );
  }
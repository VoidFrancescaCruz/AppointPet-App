/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  TextInput} from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import TableProfileAdmin from '../../constants/TableProfileAdmin';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

class ModalPopup extends Component {

  state={
      openModal : false,
  }

  onClickButton = e =>{
      e.preventDefault();
      this.setState({openModal : true});
  }

  onCloseModal = ()=>{
      this.setState({openModal : false});
  }

}


export default class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      confirmPass : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true,
    };
  }

  InsertRecord=()=>{
    var Email = this.state.adminUsername;
    var Password = this.state.adminPassword;
    var ConfirmPass = this.state.confirmPass;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

    if ((Email?.length == 0) || (Password?.length == 0) || (ConfirmPass?.length == 0)){
      alert('Required Field Is Missing!!!');
    } else if (!(checkEmail).test(Email)){
      alert('invalid email!!!');
    }
    // Password validations
    else if (Password.length < 3){
      alert('Minimum 08 characters required!!!');
    } else if (!((/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/).test(Password))){
      alert('Use atleast 01 special character!!!');
    } else if (((/[ ]/).test(Password))){
      alert("Don't include space in password!!!");
    }
    // } else if (Password !== ConfirmPass){
    //   alert('Password doesnot match!!!');
    // }


    else {
      var InsertAPIURL = 'http://10.0.2.2/AppointPet/src/Screens/SignUp.php';   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        Email: Email,
        Password: Password,
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data), //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
          this.props.navigation.navigate('LogIn');
    })
    .catch((error)=>{
      alert('Error Occured' + error);
    });
    }
  }

  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry,
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
    });
}

  onLogOutPressed = () => {
    this.props.navigation.navigate(navigationStrings.ADMINLOG);
  };

  render() {
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
          <Text style={styles.label}> Admin Name: </Text>
          <Text style={styles.light}> Lorem Ipsum </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}> Email: </Text>
          <Text style={styles.light}> loremipsum@gmail.com </Text>
        </View>
      </View>
    </View>

    <View>
    <ModalPopup open={this.state.openModal} onClose={this.onCloseModal}>
        <View style={styles.headerModal}>
          <TouchableOpacity>
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
                onChangeText={adminUsername=>this.setState({adminUsername})}
              />
              <TextInput
                style={[styles.inputField, styles.fontReg, styles.margin]}
                placeholder="Password"
                placeholderTextColor={colors.primary}
                onChangeText={adminPassword=>this.setState({adminPassword})}
              />
              <TextInput
                style={[styles.inputField, styles.fontReg, styles.margin]}
                placeholder="Retry Password"
                placeholderTextColor={colors.primary}
              />
            </KeyboardAvoidingView>
          </View>
          <View style={styles.margin}>
            <TouchableOpacity style={[styles.button, styles.fontReg]}>
              <Text style={styles.white}> Sign Up </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </ModalPopup>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.btn, styles.primary]}>
          <Text style={[styles.btnText, styles.fontReg, styles.white]} onClick={this.onClickButton}> + Add an Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn2, styles.infoContainer]}>
          <Image source={imagePath.icOut} style={styles.image1}/>
          <Text style={[styles.btnText, styles.fontReg, styles.brown]}  onPress={()=>{
                  this.onAdminLogPressed();
                }}> Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>

    <TableProfileAdmin />
  </View>
  );
}
}

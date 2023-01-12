/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';

export default class Home extends React.Component {
  onSeaAllPressed = () => {
    this.props.navigation.navigate(navigationStrings.SERVICES);
  }

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      homeAddress: '',
      petName: '',
      petGender: '',
      petBirth: new Date(),
      petBreed: '',
      petType: '',
      service: '',
      vet: '',
      scheduleDate: new Date(),
      scheduleTime: new Date(),
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true,
      isVisible: false, //state of modal default false
      chosenIndex: 0, //Picker
      chosenIndex1: 0, //Picker
      chosenIndex2: 0, //Picker
      mode: 'date',
      open: false,
      openSd: false,
      openSt: false,
    };
  }

  InsertRecord=()=>{
    var PhoneNumber = this.state.phoneNumber;
    var HomeAddress = this.state.homeAddress;
    var PetName = this.state.petName;
    var PetGender = this.state.petGender;
    var PetBirth = this.state.petBirth;
    var PetBreed = this.state.petBreed;
    var PetType = this.state.petType;
    var Service = this.state.service;
    var VetTeam = this.state.vet;
    var ScheduleDate = this.state.scheduleDate;
    var ScheduleTime = this.state.scheduleTime;

    var InsertAPIURL = 'http://10.0.2.2/AppointPet/src/Screens/Appointment.php';   //API to render appointment form

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    var Data = {
      PhoneNumber: PhoneNumber,
      HomeAddress: HomeAddress,
      PetName: PetName,
      PetGender: PetGender,
      PetBirth: PetBirth,
      PetBreed: PetBreed,
      PetType: PetType,
      Service: Service,
      VetTeam: VetTeam,
      ScheduleDate: ScheduleDate,
      ScheduleTime: ScheduleTime,
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
          this.props.navigation.navigate('Home');
    })
    .catch((error)=>{
      alert('Error Occured' + error);
    });
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
  render() {
    return (
      <ScrollView>
        <View style={[styles.container, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Hello, User!</Text>
          <Text style={[styles.header1, styles.fontMedium,{color: colors.black}]}>
            The best care for your pet is now available on a mobile app. Book an
            appointment today!
          </Text>
          <Modal
            animationType = {'fade'}
            transparent = {true}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log('Modal has been closed.'); } }>
            {/*All views of Modal*/}
            <View style = {styles.modalContainer}>
                <View style={styles.headerModal}>
                  <TouchableOpacity onPress={() => {this.setState({ isVisible:!this.state.isVisible});}}>
                    <Image source={imagePath.icClose} style={{height: 20, width: 20}} />
                  </TouchableOpacity>
                </View>
                <ScrollView>
                  <View style={{alignItems: 'center'}}>
                    <Text style={[styles.header0, styles.fontSemiBold, styles.white, {textAlign: 'center'}]}>Make an Appointment</Text>
                  </View>

                  <View>
                    <Text style={[styles.header, styles.fontMedium, styles.white]}>Your Information</Text>
                    <KeyboardAvoidingView style={styles.margin}>
                      <TextInput
                        style={[styles.inputField, styles.fontReg, styles.margin]}
                        placeholder="Phone Number"
                        placeholderTextColor={colors.primary}
                        onChangeText={phoneNumber=>this.setState({phoneNumber})}
                      />
                      <TextInput
                        style={[styles.inputField, styles.fontReg, styles.margin]}
                        placeholder="Home Address"
                        placeholderTextColor={colors.primary}
                        onChangeText={homeAddress=>this.setState({homeAddress})}
                      />
                    </KeyboardAvoidingView>
                  </View>

                  <View>
                    <Text style={[styles.header, styles.fontMedium, styles.white]}>Pet's Information</Text>
                    <KeyboardAvoidingView style={styles.margin}>
                      <TextInput
                        style={[styles.inputField, styles.fontReg, styles.margin]}
                        placeholder="Pet's Name"
                        placeholderTextColor={colors.primary}
                        onChangeText={petName=>this.setState({petName})}
                      />
                      <View style={[styles.pickerContainer, styles.spaceTop]}>
                        <Picker
                          style={styles.pickerStyles}
                          selectedValue = {this.state.petGender}
                          mode= "dropdown"
                          onValueChange={(itemValue, itemPosition) => this.setState({petGender: itemValue, chosenIndex: itemPosition})}>
                          <Picker.Item style={[styles.pickerItemStyles, styles.pickerItemDisable]} label="Gender" value="" enabled={false}/>
                          <Picker.Item style={styles.pickerItemStyles} label="Male" value="Male"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Female" value="Female"/>
                        </Picker>
                      </View>

                      <TouchableOpacity style={[styles.inputField, styles.inputDateTime]} onPress={() => this.setState({open:!this.state.open})}>
                        <Text style={styles.pickerItemStyles}> {'Birthdate: ' + format(this.state.petBirth, 'yyyy-MM-dd')} </Text>
                        <Image source={imagePath.icCalendar} style={{height: 20, width: 20, justifyContent: 'flex-end', marginRight: 15}} />
                      </TouchableOpacity>
                      <DatePicker
                        modal={true}
                        open={this.state.open}
                        date={this.state.petBirth}
                        mode="date"
                        onConfirm={(date)=> this.setState({petBirth: date})}
                        onCancel={() => this.setState({open:!this.state.open})}
                      />

                      <TextInput
                        style={[styles.inputField, styles.fontReg, styles.margin]}
                        placeholder="Pet's Breed"
                        placeholderTextColor={colors.primary}
                        onChangeText={petBreed=>this.setState({petBreed})}
                      />
                      <TextInput
                        style={[styles.inputField, styles.fontReg, styles.margin]}
                        placeholder="Pet's Type"
                        placeholderTextColor={colors.primary}
                        onChangeText={petType=>this.setState({petType})}
                      />
                    </KeyboardAvoidingView>
                  </View>

                  <View>
                    <Text style={[styles.header, styles.fontMedium, styles.white]}>Appointment Information</Text>
                    <KeyboardAvoidingView style={styles.margin}>
                      <View style={[styles.pickerContainer, styles.spaceTop]}>
                        <Picker
                          style={styles.pickerStyles}
                          selectedValue = {this.state.service}
                          mode= "dropdown"
                          onValueChange={(itemValue, itemPosition) => this.setState({service: itemValue, chosenIndex1: itemPosition})}>
                          <Picker.Item style={[styles.pickerItemStyles, styles.pickerItemDisable]} label="Services" value="" enabled={false}/>
                          <Picker.Item style={styles.pickerItemStyles} label="Diagnosis and Therapeutic" value="Diagnosis and Therapeutic"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Surgical" value="Surgical"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Vaccine" value="Vaccine"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Consultation" value="Consultation"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Laboratory" value="Laboratory"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Dentistry" value="Dentistry"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Radiology" value="Radiology"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Pharmacy" value="Pharmacy"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Pet Grooming" value="Pet Grooming"/>
                        </Picker>
                      </View>
                      <View style={[styles.pickerContainer, styles.spaceTop]}>
                        <Picker
                          style={styles.pickerStyles}
                          selectedValue = {this.state.vet}
                          mode= "dropdown"
                          onValueChange={(itemValue, itemPosition) => this.setState({vet: itemValue, chosenIndex2: itemPosition})}>
                          <Picker.Item style={[styles.pickerItemStyles, styles.pickerItemDisable]} label="Veterinarian's Team" value="" enabled={false}/>
                          <Picker.Item style={styles.pickerItemStyles} label="Dr. Dela Cruz Team 1" value="Dr. Dela Cruz Team 1"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Dr. Dela Cruz Team 2" value="Dr. Dela Cruz Team 2"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Dr. Dela Cruz Team 3" value="Dr. Dela Cruz Team 3"/>
                        </Picker>
                      </View>

                      <TouchableOpacity style={[styles.inputField, styles.inputDateTime]} onPress={() => this.setState({openSd:!this.state.openSd})}>
                        <Text style={styles.pickerItemStyles}> {'Schd Date: ' + format(this.state.scheduleDate, 'yyyy-MM-dd')} </Text>
                        <Image source={imagePath.icCalendar} style={{height: 20, width: 20, justifyContent: 'flex-end', marginRight: 12}} />
                      </TouchableOpacity>
                      <DatePicker
                        modal={true}
                        open={this.state.openSd}
                        date={this.state.scheduleDate}
                        mode="date"
                        onConfirm={(sDate)=> this.setState({scheduleDate: sDate})}
                        onCancel={() => this.setState({openSd:!this.state.openSd})}
                      />

                      <TouchableOpacity style={[styles.inputField, styles.inputDateTime]} onPress={() => this.setState({openSt:!this.state.openSt})}>
                        <Text style={styles.pickerItemStyles}> {'Schedule Time: ' + format(this.state.scheduleTime, 'KK:mm')} </Text>
                        <Image source={imagePath.icCalendar} style={{height: 20, width: 20, justifyContent: 'flex-end', marginRight: 15}} />
                      </TouchableOpacity>
                      <DatePicker
                        modal={true}
                        open={this.state.openSt}
                        date={this.state.scheduleTime}
                        mode="time"
                        onConfirm={(sTime)=> this.setState({scheduleTime: sTime})}
                        onCancel={() => this.setState({openSt:!this.state.openSt})}
                      />
                    </KeyboardAvoidingView>
                  </View>
                  <View style={styles.margin}>
                    <TouchableOpacity style={styles.button}
                      onPress={()=>{this.InsertRecord();}}>
                      <Text style={[styles.white, styles.fontReg]}> Set Appointment </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
            </View>
          </Modal>

          <TouchableOpacity style={[styles.btn, styles.primary]} onPress={() => {this.setState({ isVisible: true});}}>
            <Text style={[styles.btnText, styles.fontReg, styles.white]}> +   Make a booking </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Services</Text>
          <TouchableOpacity style={styles.btn} onPress={()=>{this.onSeaAllPressed();}}>
            <Text style={[styles.btnText1, styles.fontReg, {color: colors.black}]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.container1, styles.secondary]}>
          <View style={styles.dropShadow}>
            <TouchableOpacity style={[styles.container2]} onPress={()=>{this.onSeaAllPressed();}}>
              <Image source={imagePath.service1} style={styles.servicesImg} />
              <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                Diagnosis and Therapeutic
              </Text>
              <Text style={[styles.header2, styles.fontMedium, {color: colors.black}]}>
                Price
              </Text>
              <Text style={[styles.normalTxt, styles.fontReg]}>
                A diagnostic process to find out the true
                cause of your pet’s symptoms.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dropShadow}>
            <TouchableOpacity style={[styles.container2]} onPress={()=>{this.onSeaAllPressed();}}>
              <Image source={imagePath.service2} style={styles.servicesImg} />
              <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                Surgical
              </Text>
              <Text style={[styles.header2, styles.fontMedium, {color: colors.black}]}>
                Price
              </Text>
              <Text style={[styles.normalTxt, styles.fontReg]}>
                Performing surgery and provide follow-up
                care to promote healing.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <View>
            <TouchableOpacity style={styles.container2} onPress={()=>{this.onSeaAllPressed();}}>
              <Image source={imagePath.service3} style={styles.servicesImg} />
              <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                Vaccine
              </Text>
              <Text style={[styles.header2, styles.fontMedium, {color: colors.black}]}>
                Price
              </Text>
              <Text style={[styles.normalTxt, styles.fontReg]}>
                Stimulating an immune response in an animal
                without causing the disease itself.
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.container2} onPress={()=>{this.onSeaAllPressed();}}>
              <Image source={imagePath.service4} style={styles.servicesImg} />
              <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                Consultation
              </Text>
              <Text style={[styles.header2, styles.fontMedium, {color: colors.black}]}>
                Price
              </Text>
              <Text style={[styles.normalTxt, styles.fontReg]}>
                Discussing concerns and services about
                the well-being of pets.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.container, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>
            Take care of your lovely
            pets with a few clicks
          </Text>
          <Text style={[styles.header3, styles.fontMedium, {color: colors.black}]}>
            AppointPet is a veterinary clinic booking system.
            The project concept is to help clients make an appointment
            for their pets in the most efficient way possible.
            Track down your pet appointments, now!
          </Text>
          <Image source={imagePath.pets} style={[styles.normalImg, {width: '95%'}]} />
        </View>

        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Our Team</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.btnText1, styles.fontReg, {color: colors.black}]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <View style={styles.dropShadow}>
            <View style={[styles.container2]}>
              <Image source={imagePath.service1} style={styles.servicesImg} />
              <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                Dr. Juan Dela Cruz's Team 1
              </Text>
              <Text style={[styles.normalTxt, styles.fontReg]}>
                They diagnose, treat, and research medical conditions
                and diseases of pets, livestock, and other animals.
              </Text>
            </View>
          </View>
          <View style={styles.dropShadow}>
            <View style={[styles.container2]}>
              <Image source={imagePath.service2} style={styles.servicesImg} />
              <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                Dr. Juan Dela Cruz's Team 2
              </Text>
              <Text style={[styles.normalTxt, styles.fontReg]}>
                They diagnose, treat, and research medical conditions
                and diseases of pets, livestock, and other animals.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

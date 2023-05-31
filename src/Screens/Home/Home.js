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
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Home extends React.Component {
  onSeaAllPressed = () => {
    this.props.navigation.navigate(navigationStrings.SERVICES, {selectedIndex: 0});
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
      FName: '',
      email: '',
      message: '',
      firstName: '',
      error: '',
      scheduleDate: new Date(),
      scheduleTime: new Date(),
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true,
      isVisible: false, //state of modal default false
      chosenIndex: 0, //Picker
      chosenIndex1: 0, //Picker
      chosenIndex2: 0, //Picker
      open: false,
      openSd: false,
      openSt: false,
      data: null,
      dataVets: [],
      jsonVets: [],
      errorVets: '',
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
    var ScheduleMonth = this.state.scheduleDate.getMonth() + 1;
    var ScheduleTime = this.state.scheduleTime;
    var Status = 'PENDING';

    // Retrieve data from AsyncStorage when the component mounts
    AsyncStorage.getItem('userToken')
      .then(value => {
        this.setState({ data: value }); // Update the state with the retrieved data
        var { data } = this.state;
        var InsertAPIURL = 'https://www.appointpet.infinityfreeapp.com/AppointpetApp.php';   //API to render appointment form
        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        };
        var Data = {
          Email: data,
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
          ScheduleMonth: ScheduleMonth,
          ScheduleTime: ScheduleTime,
          Status: Status,
        };
        fetch(InsertAPIURL,{
            method:'POST',
            headers:headers,
            body: JSON.stringify(Data),
        })
        .then((Response)=>Response.json())
        .then((Response)=>{
          alert(Response[0].Message);       // If data is in JSON => Display alert msg
          this.props.navigation.navigate(navigationStrings.HOME);
        })
        .catch((error)=>{
          alert('Error Occured 1' + error);
        });
      })
      .catch(error => {
        console.error('Failed to retrieve data:', error);
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

  async componentDidMount() {
    try {
      const email = await AsyncStorage.getItem('userToken');
      this.setState({ email }, () => {
        this.handlePress();
        this.loadData();
      });
    } catch (error) {
      console.log(error);
    }

    this.loadServices();
  }

    
  // componentDidUpdate(prevProps, prevState) {
  //   // Check if rows state has changed
  //   if (this.state.rows !== prevState.rows) {
  //     // Fetch data again and update state
  //     this.handlePress();
  //   }
  // }

  handlePress = () => {
    fetch('https://www.appointpet.infinityfreeapp.com/getUserApp.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: this.state.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Message === 'Success') {
          this.setState({ message: data.Message, firstName: data.FirstName, error: null });
        } else {
          this.setState({ error: data.Message, message: null, firstName: null });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: 'An error occurred', message: null, firstName: null });
      });

    // fetch('http://10.0.2.2/master3-april28/AppointPet-App/src/Screens/services.php')
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.Message === 'Success') {
    //       const decodedData = data.Rows.map(row => ({
    //         ...row,
    //         serviceImage: `data:image/jpg;base64,${row.serviceImage}`,
    //       }));
    //       // console.log(data.Rows);
    //       this.setState({ data: decodedData });
    //     } else {
    //       this.setState({ error: data.Message });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({ error: 'An error occurred' });
    //   });
  };



  loadServices = () => {
    fetch('https://www.appointpet.infinityfreeapp.com/servicesApp.php')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ services: data });
        if (data.Message === 'Success') {
          const decodedData = data.Rows.map(row => ({
            ...row,
            serviceImage: `data:image/jpg;base64,${row.serviceImage}`,
          }));
          // console.log(data.Rows);
          this.setState({ dataS: decodedData });
        } else {
          this.setState({ error: data.Message });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  loadData = () => {
    fetch('https://www.appointpet.infinityfreeapp.com/vetsApp.php')
      .then(response => response.json())
      .then(data => {
        if (data.Message === 'Success') {
          const decodedData = data.Rows.map(row => ({
            ...row,
            vetImage: `data:image/jpg;base64,${row.vetImage}`,
          }));
          // console.log(data.Rows);
          this.setState({ jsonVets: decodedData });
        } else {
          this.setState({ errorVets: data.Message });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: 'An error occurred' });
      });
  }

  render() {
    const { message, firstName, error, dataS } = this.state;
    const { jsonVets, errorVets } = this.state;
    const { services, vets, selectedService, selectedVet } = this.state;

    return (
      <ScrollView>
        <View style={[styles.container, styles.secondary]}>
          {error ? (
            <Text style={[styles.header0, styles.fontSemiBold]}>{error}</Text>
              ) : firstName ? (
            <Text style={[styles.header0, styles.fontSemiBold]}>Hello, {firstName}! </Text>
          ) : (
            <Text>Loading data...</Text>
          )}

          {/* <Text style={[styles.header0, styles.fontSemiBold]}> Hi {firstName}! </Text> */}
          <Text style={[styles.header1, styles.fontMedium,{color: colors.black}]}>
            The best care for your pet is now available on a mobile app. Book an
            appointment today!
          </Text>
          <Text>{this.state.test}</Text>
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
                        <Text style={styles.pickerItemStyles}> {'' + format(this.state.petBirth, 'yyyy-MM-dd')} </Text>
                        <Image source={imagePath.icCalendar} style={{height: 20, width: 20, justifyContent: 'flex-end', marginRight: 15}} />
                      </TouchableOpacity>
                      <DatePicker
                        modal={true}
                        open={this.state.open}
                        date={this.state.petBirth}
                        mode="date"
                        title="Birthdate"
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
{/* ////////////////////////////////////////////////////// */}
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
                          <Picker.Item style={styles.pickerItemStyles} label="Dr. Juan Dela Cruz Team" value="Dr. Juan Dela Cruz Team"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Dr. Juancho Dela Cruz Team" value="Dr. Juancho Dela Cruz Team"/>
                          <Picker.Item style={styles.pickerItemStyles} label="Dr. Juanna Dela Cruz Team" value="Dr. Juanna Dela Cruz Team"/>
                        </Picker>
                      </View>
{/* ////////////////////////////////////////// */}
                      <TouchableOpacity style={[styles.inputField, styles.inputDateTime]} onPress={() => this.setState({openSd:!this.state.openSd})}>
                        <Text style={styles.pickerItemStyles}> {'' + format(this.state.scheduleDate, 'yyyy-MM-dd')} </Text>
                        <Image source={imagePath.icCalendar} style={{height: 20, width: 20, justifyContent: 'flex-end', marginRight: 12}} />
                      </TouchableOpacity>
                      <DatePicker
                        modal={true}
                        open={this.state.openSd}
                        date={this.state.scheduleDate}
                        mode="date"
                        title="Schedule Date"
                        onConfirm={(sDate)=> this.setState({scheduleDate: sDate})}
                        onCancel={() => this.setState({openSd:!this.state.openSd})}
                      />

                      <TouchableOpacity style={[styles.inputField, styles.inputDateTime]} onPress={() => this.setState({openSt:!this.state.openSt})}>
                        <Text style={styles.pickerItemStyles}> {'' + format(this.state.scheduleTime, 'KK:mm a')} </Text>
                        <Image source={imagePath.icClock} style={{height: 20, width: 20, justifyContent: 'flex-end', marginRight: 15}} />
                      </TouchableOpacity>
                      <DatePicker
                        modal={true}
                        open={this.state.openSt}
                        date={this.state.scheduleTime}
                        mode="time"
                        is24hour={true}
                        is24hourSource="device"
                        title="Schedule Time"
                        onConfirm={(sTime)=> this.setState({scheduleTime: sTime})}
                        onCancel={() => this.setState({openSt:!this.state.openSt})}
                      />
                    </KeyboardAvoidingView>
                  </View>
                  <View style={styles.margin}>
                    <TouchableOpacity style={styles.button}
                      onPress={()=>{this.InsertRecord(); this.setState({ isVisible:!this.state.isVisible});}}>
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
        {dataS && dataS.map((rowS, index) => (
          <View style={[styles.vetsContainer, styles.secondary]}>
            <View style={styles.dropShadow}>
              <TouchableOpacity style={[styles.container2]} key={index} onPress={()=>{this.props.navigation.navigate('Services', {selectedIndex: index});}}>
                <Image source={{uri: rowS.serviceImage}} style={styles.servicesImg} />
                <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                  {rowS.serviceName}
                </Text>
                <Text style={[styles.header4, styles.fontMedium, {color: colors.black}]}>
                  {rowS.servicePrice}
                </Text>
                <Text style={[styles.normalTxt, styles.fontReg]}>
                  {rowS.serviceSummary}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
          <Image source={imagePath.pets} style={[styles.normalImg, styles.PetImg]} />
        </View>

        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Our Teams</Text>
        </View>
        <View style={[styles.container1, styles.secondary]}>
          {jsonVets.length > 0 ? (
            jsonVets.map((item, k) => (
            <View style={[styles.vetsContainer, styles.secondary]} key={k}>
              <View style={styles.dropShadow}>
                <View style={[styles.container2]}>
                  <Image source={{uri: item.vetImage}} style={styles.servicesImg} />
                  <Text style={[styles.header2, styles.fontMedium, {color: colors.primary}]}>
                    {item.vetTeamName}
                  </Text>
                  <Text style={[styles.normalTxt, styles.fontReg]}>
                    {item.vetDescription}
                  </Text>
                </View>
              </View>
            </View>
            ))
          ) : (
              <Text>{error ? error : 'Loading...'}</Text>
            )}
        </View>
      </ScrollView>
    );
  }
}

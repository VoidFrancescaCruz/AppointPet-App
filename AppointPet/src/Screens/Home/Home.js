/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Animated,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import { SelectList } from 'react-native-dropdown-select-list';
import Services from '../Services/Services';

const ModalPopup = ({visible, children}) => {
	const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModal();
	}, [visible]);
	const toggleModal = () => {
		if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
	};

	return (
		<Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
	);
};

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const gender = [
    {key:'1', value:'Male'},
    {key:'2', value:'Female'},
  ];
  const services = [
    {key:'1', value:'Diagnosis and Therapeutic'},
    {key:'2', value:'Surgical'},
    {key:'3', value:'Vaccine'},
    {key:'4', value:'Consultation'},
    {key:'5', value:'Laboratory'},
    {key:'6', value:'Dentistry'},
    {key:'7', value:'Radiology'},
    {key:'8', value:'Pharmacy'},
    {key:'9', value:'Pet Grooming'},
  ];
  const vetTeams = [
    {key:'1', value:'Dr. Dela Cruz Team 1'},
    {key:'2', value:'Dr. Dela Cruz Team 2'},
    {key:'3', value:'Dr. Dela Cruz Team 3'},
  ];
  return (
    <ScrollView>
      <View style={[styles.container, styles.secondary]}>
        <Text style={styles.header0}>Hello, User!</Text>
        <Text style={[styles.header1, {color: colors.black}]}>
          The best care for your pet is now available on a mobile app. Book an
          appointment today!
        </Text>

        <ModalPopup visible={visible}>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image source={imagePath.icClose} style={{height: 20, width: 20}} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.header0, styles.white, {textAlign: 'center'}]}>Make an Appointment</Text>
            </View>

            <View>
              <Text style={[styles.header, styles.white]}>Your Information</Text>
              <KeyboardAvoidingView style={styles.margin}>
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Email"
                  placeholderTextColor={colors.primary}
                />
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Password"
                  placeholderTextColor={colors.primary}
                />
              </KeyboardAvoidingView>
            </View>

            <View>
              <Text style={[styles.header, styles.white]}>Pet's Information</Text>
              <KeyboardAvoidingView style={styles.margin}>
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Pet's Name"
                  placeholderTextColor={colors.primary}
                />
                <SelectList
                  data={gender}
                  setSelected={setSelected}
                  boxStyles={{
                    backgroundColor: colors.white,
                    height: 50,
                    width: 225,
                    paddingLeft: 15,
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                  inputStyles={{
                    color: colors.primary,
                  }}
                  dropdownStyles={{
                    backgroundColor: colors.secondary,
                    height: 100,
                  }}
                  dropdownTextStyles={{
                    color: colors.primary,
                  }}
                  placeholder= "Pet's Gender"
                />
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Birthdate"
                  placeholderTextColor={colors.primary}
                />
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Pet's Breed"
                  placeholderTextColor={colors.primary}
                />
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Pet's Type"
                  placeholderTextColor={colors.primary}
                />
              </KeyboardAvoidingView>
            </View>

            <View>
              <Text style={[styles.header, styles.white]}>Appointment Information</Text>
              <KeyboardAvoidingView style={styles.margin}>
                <SelectList
                  data={services}
                  setSelected={setSelected}
                  boxStyles={{
                    backgroundColor: colors.white,
                    height: 50,
                    width: 225,
                    paddingLeft: 15,
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                  inputStyles={{
                    color: colors.primary,
                  }}
                  dropdownStyles={{
                    backgroundColor: colors.secondary,
                    height: 100,
                  }}
                  dropdownTextStyles={{
                    color: colors.primary,
                  }}
                  placeholder= "Services"
                />
                <SelectList
                  data={vetTeams}
                  setSelected={setSelected}
                  boxStyles={{
                    backgroundColor: colors.white,
                    height: 50,
                    width: 225,
                    paddingLeft: 15,
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                  inputStyles={{
                    color: colors.primary,
                  }}
                  dropdownStyles={{
                    backgroundColor: colors.secondary,
                    height: 100,
                  }}
                  dropdownTextStyles={{
                    color: colors.primary,
                  }}
                  placeholder= "Veterinarian's Team"
                />
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Schedule Date"
                  placeholderTextColor={colors.primary}
                />
                <TextInput
                  style={[styles.inputField, styles.margin]}
                  placeholder="Schedule Time"
                  placeholderTextColor={colors.primary}
                />
              </KeyboardAvoidingView>
            </View>
            <View style={styles.margin}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.white}> Set Appointment </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ModalPopup>
        <TouchableOpacity style={[styles.btn, styles.primary]} onPress={() => setVisible(true)}>
          <Text style={[styles.btnText, styles.white]}> + Make a booking</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.container1, styles.secondary]}>
        <Text style={styles.header0}>Services</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText1, {color: colors.black}]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.container1, styles.secondary]}>
        <View style={styles.dropShadow}>
          <TouchableOpacity style={[styles.container2]}>
            <Image source={imagePath.service1} style={styles.servicesImg} />
            <Text style={[styles.header2, {color: colors.primary}]}>
              Diagnosis and Therapeutic
            </Text>
            <Text style={[styles.header2, {color: colors.black}]}>
              Price
            </Text>
            <Text style={[styles.normalTxt]}>
              A diagnostic process to find out the true
              cause of your pet’s symptoms.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dropShadow}>
          <TouchableOpacity style={[styles.container2]}>
            <Image source={imagePath.service2} style={styles.servicesImg} />
            <Text style={[styles.header2, {color: colors.primary}]}>
              Surgical
            </Text>
            <Text style={[styles.header2, {color: colors.black}]}>
              Price
            </Text>
            <Text style={[styles.normalTxt]}>
              Performing surgery and provide follow-up
              care to promote healing.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.container1, styles.secondary]}>
        <View>
          <TouchableOpacity style={styles.container2}>
            <Image source={imagePath.service3} style={styles.servicesImg} />
            <Text style={[styles.header2, {color: colors.primary}]}>
              Vaccine
            </Text>
            <Text style={[styles.header2, {color: colors.black}]}>
              Price
            </Text>
            <Text style={[styles.normalTxt]}>
              Stimulating an immune response in an animal
              without causing the disease itself.
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.container2}>
            <Image source={imagePath.service4} style={styles.servicesImg} />
            <Text style={[styles.header2, {color: colors.primary}]}>
              Consultation
            </Text>
            <Text style={[styles.header2, {color: colors.black}]}>
              Price
            </Text>
            <Text style={[styles.normalTxt]}>
              Discussing concerns and services about
              the well-being of pets.
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.container, styles.secondary]}>
        <Text style={styles.header0}>
          Take care of your lovely
          pets with a few clicks
        </Text>
        <Text style={[styles.header3, {color: colors.black}]}>
          AppointPet is a veterinary clinic booking system.
          The project concept is to help clients make an appointment
          for their pets in the most efficient way possible.
          Track down your pet appointments, now!
        </Text>
        <Image source={imagePath.pets} style={[styles.normalImg, {width: '95%'}]} />
      </View>

      <View style={[styles.container1, styles.secondary]}>
        <Text style={styles.header0}>Our Team</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText1, {color: colors.black}]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container1, styles.secondary]}>
        <View style={styles.dropShadow}>
          <View style={[styles.container2]}>
            <Image source={imagePath.service1} style={styles.servicesImg} />
            <Text style={[styles.header2, {color: colors.primary}]}>
              Dr. Juan Dela Cruz's Team 1
            </Text>
            <Text style={[styles.normalTxt]}>
              They diagnose, treat, and research medical conditions
              and diseases of pets, livestock, and other animals.
            </Text>
          </View>
        </View>
        <View style={styles.dropShadow}>
          <View style={[styles.container2]}>
            <Image source={imagePath.service2} style={styles.servicesImg} />
            <Text style={[styles.header2, {color: colors.primary}]}>
              Dr. Juan Dela Cruz's Team 2
            </Text>
            <Text style={[styles.normalTxt]}>
              They diagnose, treat, and research medical conditions
              and diseases of pets, livestock, and other animals.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

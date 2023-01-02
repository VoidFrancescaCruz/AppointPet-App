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
  TextInput} from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import TableProfileAdmin from '../../constants/TableProfileAdmin';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';

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

const ProfileAdmin = () => {
	const navigation = useNavigation();
  const onLogOutPressed = () => {
    navigation.navigate(navigationStrings.ADMINLOG);
  };
  const [visible, setVisible] = React.useState(false);
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
        <ModalPopup visible={visible}>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={() => setVisible(false)}>
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
                />
                <TextInput
                  style={[styles.inputField, styles.fontReg, styles.margin]}
                  placeholder="Password"
                  placeholderTextColor={colors.primary}
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
            <Text style={[styles.btnText, styles.fontReg, styles.white]} onPress={() => setVisible(true)}> + Add an Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn2, styles.infoContainer]}>
            <Image source={imagePath.icOut} style={styles.image1}/>
            <Text style={[styles.btnText, styles.fontReg, styles.brown]} onPress={onLogOutPressed}> Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TableProfileAdmin />
    </View>
  );
};

export default ProfileAdmin;

/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  sectionContainer: {
    width: '100%',
    height: 100,
    marginTop: 50,

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  image1: {
    width: 18,
    height: 15,
  },

  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: 'black',
    marginVertical: 2,
    fontFamily: 'Poppins-SemiBold',
  },

  light: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    marginVertical: 4,
    width: 'auto',
    color: 'black',
  },

  btn: {
    width: 180,
    height: 35,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },

  btn2: {
    width: 150,
    height: 35,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },

  btnText: {
    fontSize: 14,
    margin: 5,
    letterSpacing: 1,
  },

  primary: {
    backgroundColor: colors.primary,
  },

  white: {
    color: colors.white,
  },

  brown: {
    color: colors.primary,
  },

  header0: {
    fontSize: 30,
    textAlign: 'left',
    margin: 5,
    color: colors.primary,
  },

  headerModal: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '85%',
    height: 'auto',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '27%',
  },

  margin: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  inputField: {
    backgroundColor: 'white',
    color: colors.primary,
    height: 50,
    width: 225,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },

  button: {
    width: 175,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: colors.primary,
  },

  fontLight: {
    fontFamily: 'Poppins-Light',
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  fontMedium: {
    fontFamily: 'Poppins-Medium',
  },

  fontSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },

  fontBold: {
    fontFamily: 'Poppins-Bold',
  },

  infoContainer: {
    flexDirection: 'row',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
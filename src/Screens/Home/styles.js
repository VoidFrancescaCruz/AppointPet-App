/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  container1: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  container2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 160,
    height: 320,
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    padding: 15,
    backgroundColor: colors.secondary,
    elevation: 5,
  },

  containerModal: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
    color: colors.primary,
  },

  header0: {
    fontSize: 30,
    textAlign: 'left',
    margin: 5,
    color: colors.primary,
  },

  header1: {
    fontSize: 15,
    margin: 5,
    letterSpacing: 1,
  },

  header2: {
    fontSize: 14,
    margin: 2,
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  header3: {
    fontSize: 15,
    margin: 5,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 40,
  },

  normalTxt: {
    fontSize: 11,
    margin: 2,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: colors.black,
  },

  btn: {
    width: 190,
    height: 35,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  btnText: {
    fontSize: 14,
    margin: 5,
    letterSpacing: 1,
  },

  btnText1: {
    fontSize: 14,
    marginRight: 10,
    letterSpacing: 1,
    alignSelf: 'flex-end',
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.secondary,
  },

  white: {
    color: colors.white,
  },

  servicesImg: {
    borderRadius: 20,
    height: 125,
    width: 125,
    alignSelf: 'center',
  },

  normalImg: {
    alignSelf: 'flex-end',
  },

  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '85%',
    height: '90%',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '6%',
  },

  headerModal: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
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

  pickerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 225,
    fontFamily: 'Poppins-Regular',
  },

  pickerStyles: {
    height: 50,
    width: 225,
    color: colors.primary,
    justifyContent: 'center',
    backgroundColor: colors.white,
    fontFamily: 'Poppins-Regular',
  },

  pickerItemStyles: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },

  pickerItemDisable: {
    color: colors.black,
  },

  spaceTop: {
    marginTop: 10,
    marginBottom: 10,
  },

  inputDateTime: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //
  overlayStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#00000066',
  },
  headerStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CAD3DF',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50,
  },
  placeholderStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: '#CDCDCD',
    marginHorizontal: 10,
  },
  textStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default styles;

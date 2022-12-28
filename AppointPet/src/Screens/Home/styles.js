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
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 5,
    color: colors.primary,
  },

  header1: {
    fontSize: 15,
    margin: 5,
    letterSpacing: 1,
    fontWeight: 'bold',
  },

  header2: {
    fontSize: 15,
    margin: 5,
    letterSpacing: 1,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  header3: {
    fontSize: 15,
    margin: 5,
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 40,
  },

  normalTxt: {
    fontSize: 12,
    margin: 5,
    letterSpacing: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: colors.black,
  },

  btn: {
    width: 175,
    height: 35,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  btnText: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 5,
    letterSpacing: 1,
  },

  btnText1: {
    fontWeight: 'bold',
    fontSize: 15,
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

  /*dropShadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },*/

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
});

export default styles;

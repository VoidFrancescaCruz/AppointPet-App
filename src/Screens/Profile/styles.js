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
    height: 200,

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  sectionContainer1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },

  sectionContainer2: {
    marginTop: -10,
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

  infoContainer: {
    flexDirection: 'row',
  },

  btn2: {
    width: 120,
    height: 35,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: -5,
  },

  btnText: {
    fontSize: 14,
    margin: 5,
    letterSpacing: 1,
  },

  fontReg: {
    fontFamily: 'Poppins-Regular',
  },

  brown: {
    color: colors.primary,
  },
});

export default styles;

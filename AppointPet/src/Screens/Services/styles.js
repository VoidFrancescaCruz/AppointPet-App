/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container1: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  header0:{
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
    color: colors.primary,
  },

  header1:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
    color: colors.black,
  },

  descTxt: {
    fontSize: 15,
    margin: 5,
    letterSpacing: 1,
    lineHeight: 25,
    flexWrap: 'wrap',
    textAlign: 'justify',
    color: colors.black,
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
  normalImg: {
    alignSelf: 'center',
    width: '100%',
  },
});

export default styles;

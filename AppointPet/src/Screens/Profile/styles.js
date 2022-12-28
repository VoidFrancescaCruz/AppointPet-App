/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
    //width: '85%',
    paddingHorizontal: 20,
  },

  sectionContainer: {
    width: '100%',
    height: 225,

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
    marginTop: 8,
    marginBottom: 8,
  },

  bold: {
    fontWeight: '600',
  },

  light: {
    fontWeight: '400',
    fontSize: 12,
    width: 'auto',
  },
});

export default styles;

/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  pageTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },

  pageTitle: {
    fontSize: 28,
    color: colors.primary,
    fontFamily: 'Poppins-SemiBold',
  },

  image: {
    width: 20,
    height: 25,
  },
});

export default styles;

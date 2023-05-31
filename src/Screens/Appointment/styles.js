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
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },

  pageSubTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 1,
    marginBottom: 20,
  },

  pageTitle: {
    fontSize: 25,
    color: colors.primary,
    fontFamily: 'Poppins-SemiBold',
  },

  pageSubTitle: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontFamily: 'Poppins-Light',
  },

  image: {
    width: 20,
    height: 25,
  },
});

export default styles;

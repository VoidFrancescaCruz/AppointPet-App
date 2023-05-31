/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: 25,
  },

  brown: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    width: '95%',
  },

  firstHeight: {
    height: '65%',
    paddingBottom: 0,
  },

  secondHeight: {
    height: '15%',
    marginHorizontal: '5%',
  },

  thirdHeight: {
    height: '10%',
    borderTopWidth: 1,
    borderTopColor: '#6F4C29',
    marginHorizontal: '5%',
    paddingTop: '4%',
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    width: '100%',
  },

  rowDevs: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
  },

  rowDevs2: {
    width: '100%',
  },

  column: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '33%',
    marginVertical: '3%',
  },

  column1: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '33%',
    marginVertical: '3%',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#6F4C29',
  },

  row0: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
    width: '55%',
    marginVertical: '2%',
  },

  rowLogo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  back: {
    marginLeft: 270,
    position: 'absolute',
  },

  paragraph: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'black',
    lineHeight: 22,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Regular',
  },

  white: {
    textAlign: 'left',
    fontSize: 14,
    color: 'black',
    paddingHorizontal: '5%',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },

  white1: {
    textAlign: 'left',
    fontSize: 14,
    color: 'black',
    lineHeight: 25,
    fontFamily: 'Poppins-Regular',
  },
  white2: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    lineHeight: 25,
    fontFamily: 'Poppins-Medium',
  },

  footer: {
    marginTop: 8,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    color: '#6F4C29',
    lineHeight: 25,
    opacity: 0.5,
    fontFamily: 'Poppins-Regular',
  },

  image: {
    width: 200,
    height: 50,
    marginBottom: 15,
  },

  logo: {
    width: 30,
    height: 30,
  },
});

export default styles;

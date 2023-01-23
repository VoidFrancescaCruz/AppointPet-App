/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6F4C29',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      header: {
        fontSize: 40,
        // fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
      },
    
      subtitle: {
        // fontWeight: '300',
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Poppins-Light',
      },
    
      bolder: {
        // fontWeight: '500',
        fontFamily: 'Poppins-SemiBold',
      },
    
      button: {
        width: 175,
        height: 50,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      colorBrown: {
        color: '#6F4C29',
      },
    
      bgWhite: {
        backgroundColor: 'white',
      },
    
      bgBrown: {
        backgroundColor: '#6F4C29',
      },
    
      buttonBorder: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
      },
    
      colorWhite: {
        color: 'white',
      },
    
      margin: {
        marginTop: 15,
        marginBottom: 15,
      },
    
      inputField: {
        backgroundColor: 'white',
        color: '#6F4C29',
        height: 40,
        width: 225,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
      },
    
      regText: {
        fontFamily: 'Poppins-Regular',
      },
    
      marginSignIn: {
        marginBottom: -9,
      },
})

export default styles;
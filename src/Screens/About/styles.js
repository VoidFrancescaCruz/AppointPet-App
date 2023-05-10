import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#6F4C29',
        paddingTop: 40,
    },
    
    brown: {
    
        backgroundColor: '#6F4C29',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
      },
      
    firstHeight: {
    
        height: '70%',
    },
    
    secondHeight: {
    
        height: '30%',
    },
    
    row: {
    
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 35,
        width: 200,
    },  
    
    paragraph: {
        fontSize: 14,
        textAlign: 'justify',
        color: 'white',
        lineHeight: 20,
        margin: 10,
    },
    
    white: {
    
        fontSize: 14,
        color: 'white',
    },
    
    image: {
    
        width: 200,
        height: 50,
        marginBottom: 15,
    },
    
    logo: {
          
          width: 25,
          height: 25,
    },
});

export default styles;

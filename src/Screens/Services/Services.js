import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Services = ({route}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const {selectedIndex} = route.params;
  const scrollViewRef = React.useRef(null);
  useEffect(() => {
    fetch(
      'http://10.0.2.2/master3-april28/AppointPet-App/src/Screens/services.php',
    )
      .then(response => response.json())
      .then(data => {
        /*
        if (data.Message === 'Success') {
          setData(data.Rows);
        } else {
          setError(data.Message);
        }
        */
        if (data.Message === 'Success') {
          // Decode the base64 string into an image data
          const decodedData = data.Rows.map(row => ({
            ...row,
            serviceImage: `data:image/jpg;base64,${row.serviceImage}`,
          }));
          // console.log(data.Rows);
          setData(decodedData);
        } else {
          setError(data.Message);
        }
      })
      .catch(error => {
        console.log(error);
        setError('An error occurred');
      });

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: selectedIndex * 900});
    }
  }, [selectedIndex]);

  return (
    <ScrollView ref={scrollViewRef}>
      <View>
        {data.length > 0 ? (
          data.map((item, index) => (
            <View style={styles.row} key={index}>
              <View style={[styles.container, styles.secondary]}>
                <Image
                  style={styles.normalImg}
                  source={{uri: item.serviceImage}}
                />
              </View>
              <View style={[styles.container1, styles.secondary]}>
                <Text style={[styles.header0, styles.fontSemiBold]}>
                  {' '}
                  {item.serviceName}{' '}
                </Text>
                <Text style={[styles.header1, styles.fontMedium]}>
                  {' '}
                  {item.servicePrice}
                </Text>
                <Text
                  style={[
                    styles.descTxt,
                    styles.fontReg,
                    {color: colors.black},
                  ]}>
                  {'\t'}
                  {'\t'}
                  {'\t'} {item.serviceDescription}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No data found.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Services;

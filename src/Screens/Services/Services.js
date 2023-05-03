import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Services = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

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
          console.log(data.Rows);
          setData(decodedData);
        } else {
          setError(data.Message);
        }
      })
      .catch(error => {
        console.log(error);
        setError('An error occurred');
      });
  }, []);

  return (
    <ScrollView>
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
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, ScrollView } from 'react-native';
// import styles from './styles';
// import colors from '../../constants/colors';

// export default class Services extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: '',
//       data: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     fetch('http://10.0.2.2/master3-april28/AppointPet-App/src/Screens/services.php')
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.Message === 'Success') {
//           this.setState({ data: data.rows });
//         } else {
//           this.setState({ error: data.Message, data: [] });
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         this.setState({ error: 'An error occurred', data: [] });
//       });
//   };

//   render() {
//     const { data } = this.state;
//     return (
//       <ScrollView>
//         {data && data.map((row, index) => (
//           <View key={index} style={styles.container}>
//             <View style={styles.container}>
//               <Image
//                 style={styles.image}
//                 source={{uri: `data:image/jpeg;base64,${row.ServiceImage}`}}
//                 resizeMode="cover"
//               />
//             </View>
//             <View style={styles.container1}>
//               <Text style={styles.header}>{row.ServiceName}</Text>
//               <Text style={styles.price}>{row.ServicePrice}</Text>
//               <Text style={styles.description}>{row.ServiceDescription}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     );
//   }
// }


// const Services = () => {

//   const [data, setData] = useState([]);
//   // const [imageData, setImageData] = useState('');

//   useEffect(() => {
//     fetch('http://10.0.2.2/april27/AppointPet-App/services.php')
//       .then(response => response.json())
//       .then(data => {
//         data.Rows.forEach(item => {
//           item.serviceImage = `http://10.0.2.2/april27/AppointPet-App/${item.serviceImage}`;
//         });
//         setData(data.Rows);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <ScrollView>
//       <View>
//         {data.length > 0 ? (
//           data.map((item, index) => (
//             <View style={styles.row} key={index}>
//               {/* <View style={[styles.container, styles.secondary]}>
//                 <Image source={{ uri: `data:image/jpeg;base64,${encodeURIComponent(item.serviceImage)}` }} style={styles.normalImg} />
//               </View> */}
//               <View style={[styles.container1, styles.secondary]}>
//                 <Text style={[styles.header0, styles.fontSemiBold]}> {item.serviceName} </Text>
//                 <Text style={[styles.header1, styles.fontMedium]}> {item.servicePrice}</Text>
//                 <Text style={[styles.descTxt, styles.fontReg, { color: colors.black }]}>
//                   {'\t'}{'\t'}{'\t'} {item.serviceDescription}
//                 </Text>
//               </View>
//             </View>
//           ))
//         ) : (
//           <Text>No data found.</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default Services;


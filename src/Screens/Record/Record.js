/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import imagePath from '../../constants/imagePath';
import TableRecord from '../../constants/TableRecord';

const Record = () => {
  return (
		<View style={styles.container}>
			<View style={styles.pageTitleContainer}>
				<Text style={styles.pageTitle}> Records List </Text>
				<TouchableOpacity>
					<Image
						source={imagePath.icDelete}
						resizeMode="cover"
						style={styles.image}
					/>
				</TouchableOpacity>
			</View>

			<Select />

			<TableRecord />
		</View>
  );
};

export default Record;

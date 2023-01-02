/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Select from '../../constants/Select';
import TablePending from '../../constants/TablePending';
import imagePath from '../../constants/imagePath';

const Pending = () => {
  return (
		<View style={styles.container}>
			<View style={styles.pageTitleContainer}>
				<Text style={styles.pageTitle}> Pending List </Text>
				<TouchableOpacity>
					<Image
						source={imagePath.icDelete}
						resizeMode="cover"
						style={styles.image}
					/>
				</TouchableOpacity>
			</View>

			<TablePending />
		</View>
  );
};

export default Pending;

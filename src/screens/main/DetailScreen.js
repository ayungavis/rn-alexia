import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-slideshow';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class DetailScreen extends Component {
	render() {
		return(
			<Container style={styles.container}>

			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
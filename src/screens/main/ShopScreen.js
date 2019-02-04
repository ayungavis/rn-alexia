import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; 
import { Container, Text } from 'native-base';
import Slideshow from 'react-native-slideshow';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class ShopScreen extends Component {
	render() {
		return(
			<Container style={styles.container}>
				<View>
					<Slide
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
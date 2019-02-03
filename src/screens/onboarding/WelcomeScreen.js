import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class WelcomeScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Image 
					style={styles.image}
					source={images.welcome} 
				/>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.title}>{strings.onboarding.welcome.title}</Text>
				</View>
				<View styles={{ flex: 1, justifyContent: 'center' }}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.text}>{strings.onboarding.welcome.button}</Text>
					</TouchableOpacity>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		position: 'absolute',
		width: wp('100%'),
		height: hp('100%'),
		resizeMode: 'stretch'
	},
	title: {
		fontFamily: fonts.black,
		fontSize: hp('6%'),
		color: colors.primary,
		letterSpacing: 10,
		marginBottom: 100
	},
	button: {
		backgroundColor: colors.primary,
		borderRadius: 50,
		width: wp('80%'),
		height: hp('7.5%'),
		marginBottom: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: 'white',
	}
})
import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class WelcomeScreen extends Component {
	render() {
		const { navigate } = this.props.navigation
		return (
			<Container style={styles.container}>
				<StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent={true} />
				<Image 
					style={styles.image}
					source={images.welcome} 
				/>
				<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.title}>{strings.onboarding.welcome.title}</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
					<TouchableOpacity style={styles.buttonLogin} onPress={() => navigate('Login')}>
						<Icon name="ios-person" size={15} color={colors.primary} /><Text>  </Text><Text style={styles.textLogin}>{strings.onboarding.welcome.login}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigate('Shop')}>
						<Icon name="ios-cart" size={15} color="white" /><Text>  </Text><Text style={styles.text}>{strings.onboarding.welcome.button}</Text>
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
		width: wp('100%'),
		height: hp('100%'),
		position: 'absolute',
		resizeMode: 'stretch'
	},
	title: {
		fontFamily: fonts.black,
		fontSize: hp('6%'),
		color: colors.primary,
		letterSpacing: 10,
		marginTop: 100
	},
	buttonLogin: {
		backgroundColor: 'white',
		borderRadius: 50,
		width: wp('75%'),
		height: hp('7%'),
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {
		backgroundColor: colors.primary,
		borderRadius: 50,
		width: wp('75%'),
		height: hp('7%'),
		marginBottom: 35,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	text: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white',
	},
	textLogin: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary,
	},
})
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Text, Form, Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { postRegister } from 'library/redux/actions/auth';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

class RegisterScreen extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	/*handleBack() {
		this.props.navigation.goBack()
	}

	require() {
		if (this.state.name != '' && this.state.email != '' && this.state.password != '') {
			return false
		}
		else return true
	}

	styleRequire() {
		if (this.state.name != '' && this.state.email != '' && this.state.password != '') {
			return styles.button
		}
		else return styles.buttonDisabled
	}*/

	handleRegister() {
		this.props.dispatch(postRegister({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}))
	}

	render() {
		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent={true} />
				<View style={styles.background}>
					<View style={styles.layout}>
						<Text style={styles.title}>Create your {"\n"}account with email</Text>
						<View style={styles.formLayout}>
							<Form style={styles.form}>
								<Item stackedLabel>
									<Label style={styles.label}>Name</Label>
									<Input style={styles.input} autoFocus={true} onChangeText={(text) => this.setState({ name: text })} />
								</Item>
								<Item stackedLabel>
									<Label style={styles.label}>Email</Label>
									<Input style={styles.input} onChangeText={(text) => this.setState({ email: text })} />
								</Item>
								<Item stackedLabel>
									<Label style={styles.label}>Password</Label>
									<Input style={styles.input} secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
								</Item>
							</Form>
						</View>
						<RectButton style={styles.button} onPress={() => this.handleRegister()}>
							<Text style={styles.buttonText}>Sign Up</Text>
						</RectButton>
						<View style={styles.footerLayout}>
							<Text style={styles.footer}>Already have an account?</Text>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
								<Text style={styles.hyperlink}> Log In</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{/*<View style={styles.floatingBack}>
					<TouchableOpacity onPress={() => this.handleBack()}>
						<FontAwesome5 name='chevron-left' size={25} color={colors.primary} light />
					</TouchableOpacity>
				</View>*/}
			</Container>
		)
	}
}

const mamStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mamStateToProps)(RegisterScreen)

const styles = StyleSheet.create({
	conatiner: {
		flex: 1
	},
	background: {
		backgroundColor: colors.authbackground,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: wp('100%'),
		height: hp('100%')
	},
	floatingBack: {
		position: 'absolute',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		top: 40,
		left: 20
	},
	layout: {
		margin: 20
	},
	title: {
		fontFamily: fonts.bold,
		fontSize: hp('5%'),
		color: colors.primary
	},
	formLayout: {
		borderRadius: 10,
		backgroundColor: 'white',
		width: wp('90%'),
		height: 215,
		marginTop: 25,
		marginBottom: 25
	},
	form: {
		width: wp('85%')
	},
	label: {
		fontFamily: fonts.bold,
		color: colors.grey
	},
	input: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary
	},
	button: {
		borderRadius: 100,
		width: wp('90%'),
		height: hp('8%'),
		backgroundColor: colors.primary,
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		elevation: 10,
		shadowRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 25
	},
	buttonDisabled: {
		borderRadius: 100,
		width: wp('90%'),
		height: hp('8%'),
		backgroundColor: colors.grey,
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		elevation: 10,
		shadowRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 25
	},
	buttonText: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: 'white'
	},
	footerLayout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	footer: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.primary
	},
	hyperlink: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.primary
	}
})
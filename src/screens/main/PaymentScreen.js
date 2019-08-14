import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Container, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import axios from 'axios';

import Header from 'library/header';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';
import server from 'res/server';

export default class ShippingScreen extends Component {
	constructor(props) {
		super(props)
		const checkout = props.navigation.getParam('checkout')
		this.state = {
			checkout: checkout,
			carts: [],
			valid_cc: ''
		}
	}

	componentDidMount() {
		this.getCart()
	}

	getCart = () => {
		axios({
			method: 'get',
			url: `${server.api}/orders`
		})
		.then(res => {
			this.setState({
				carts: res.data
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

	_onChange = (form) => {
		this.setState({
			valid_cc: form
		})
	}

	require() {
		if (this.state.valid_cc.valid) {
			return false
		}
		else return true
	}

	styleRequire() {
		if (this.state.valid_cc.valid) {
			return styles.bottomButton
		}
		else return styles.bottomButtonDisabled
	}

	refresh() {
		
	}

	render() {
		// const { payment } = this.props.navigation.state.params
		// let price = payment.totalPrice + payment.shippingMethod
		let totalPrice = 0
		this.state.carts.forEach((item) => {
			totalPrice += item.qty * item.price
 		})
 		if(this.state.checkout.selectedShipping) {
 			totalPrice = totalPrice + parseInt(this.state.checkout.selectedShipping) 
 		}
		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'white'} barStyle="dark-content" translucent={false} />
				<View style={styles.top}>
					<Header leftIcon="chevron-left" navigation={this.props.navigation} title={strings.payment.title} rightIcon="ellipsis-h" />
				</View>
				<View style={styles.middle}>
					<View style={styles.indicatorLayout}>
						<Icon name="ios-pin" size={25} color={colors.primary} style={styles.icon} />
						<View style={styles.dotFinished}></View>
						<View style={styles.dotFinished}></View>
						<View style={styles.dotFinished}></View>
						<Icon name="ios-card" size={25} color={colors.primary} />
						<View style={styles.dotUnfinished}></View>
						<View style={styles.dotUnfinished}></View>
						<View style={styles.dotUnfinished}></View>
						<Icon name="ios-checkmark-circle" size={25} color={colors.grey} />
					</View>
					<ScrollView showVerticalScrollIndicator={false}>
						<View style={styles.middleLayout}>
							<Text style={styles.stepText}>Step 2</Text>
							<Text style={styles.titleText}>{strings.payment.step.payment}</Text>
							<View style={styles.form}>
								<CreditCardInput onChange={this._onChange} />
							</View>
						</View>
					</ScrollView>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Success', { onGoBack: () => this.refresh()})} disabled={this.require()}>
						<View style={this.styleRequire()}>
							<Text style={styles.bottomButtonText}>Pay ${totalPrice.toFixed(2)}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	middle: {
		flex: 8,
		width: wp('100%'),
		height: hp('100%')
	},
	bottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	indicatorLayout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		marginRight: 10,
		marginLeft: 10
	},
	dotFinished: {
		width: 5,
		height: 5,
		backgroundColor: colors.primary,
		borderRadius: 100,
		marginLeft: 10,
		marginRight: 10
	},
	dotUnfinished: {
		width: 5,
		height: 5,
		backgroundColor: colors.grey,
		borderRadius: 100,
		marginLeft: 10,
		marginRight: 10
	},
	middleLayout: {
		marginRight: 20,
		marginLeft: 20
	},
	stepText: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginTop: 20,
	},
	titleText: {
		fontFamily: fonts.bold,
		fontSize: hp('6%'),
		color: colors.primary,
		marginTop: -5
	},
	form: {
		marginTop: 20,
		marginLeft: -10,
		marginBottom: 20
	},
	bottomButton: {
		backgroundColor: colors.primary,
		borderRadius: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: wp('75%'),
		height: hp('7%'),
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		marginBottom: 10
	},
	bottomButtonDisabled: {
		backgroundColor: colors.grey,
		borderRadius: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: wp('75%'),
		height: hp('7%'),
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		marginBottom: 10
	},
	bottomButtonText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	}
})
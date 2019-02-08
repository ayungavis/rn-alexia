import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Container, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from 'library/header';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

import 'res/data/shipping';
import 'res/data/city';
import 'res/data/country';

export default class ShippingScreen extends Component {
	constructor(props) {
		super(props)
		const totalPrice = props.navigation.getParam('totalPrice')
		this.state = {
			shippingMethod: '',
			indexShipping: '',
			selectedCity: '',
			indexCity: '',
			selectedCountry: '',
			indexCountry: '',
			fullName: '',
			address: '',
			zipCode: '',
			totalPrice: totalPrice,
			city: city,
			country: country,
			shipping: shipping
		}
	}

	renderShipping() {
		let items = [<Picker.Item key='0' label='Select Shipping Method' value='0' />];
		this.state.shipping.forEach((item) => {
			items.push(
				<Picker.Item key={item.id} label={item.name} value={item.cost} />
			)
		})
		return items
	}

	renderCountry() {
		let items = [<Picker.Item key='0' label='Select Country' value='0' />];
		this.state.country.forEach((item) => {
			items.push(
				<Picker.Item key={item.id} label={item.name} value={item.id} />
			)
		})
		return items
	}

	renderCity() {
		let items = [<Picker.Item key='0' label='Select City' value='0' />];
		this.state.city.forEach((item) => {
			items.push(
				<Picker.Item key={item.id} label={item.name} value={item.id} />
			)
		})
		return items
	}

	render() {
		/*const totalPrice = this.props.navigation.getParam('totalPrice')*/
		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'white'} barStyle="dark-content" translucent={false} />
				<View style={styles.top}>
					<Header leftIcon="chevron-left" navigation={this.props.navigation} title={strings.payment.title} rightIcon="ellipsis-h" />
				</View>
				<View style={styles.middle}>
					<View style={styles.indicatorLayout}>
						<Icon name="ios-pin" size={25} color={colors.primary} style={styles.icon} />
						<View style={styles.dotUnfinished}></View>
						<View style={styles.dotUnfinished}></View>
						<View style={styles.dotUnfinished}></View>
						<Icon name="ios-card" size={25} color={colors.grey} />
						<View style={styles.dotUnfinished}></View>
						<View style={styles.dotUnfinished}></View>
						<View style={styles.dotUnfinished}></View>
						<Icon name="ios-checkmark-circle" size={25} color={colors.grey} />
					</View>
					<ScrollView showVerticalScrollIndicator={false}>
						<View style={styles.middleLayout}>
							<Text style={styles.stepText}>Step 1</Text>
							<Text style={styles.titleText}>{strings.payment.step.shipping}</Text>
							<View style={styles.form}>
								<Form>
									<Item stackedLabel>
										<Label style={styles.label}>Full Name</Label>
										<Input style={styles.input} onChangeText={(text) => this.setState({ fullName: text })} />
									</Item>
									<Item stackedLabel>
										<Label style={styles.label}>Address</Label>
										<Input style={styles.input} onChangeText={(text) => this.setState({ address: text })} />
									</Item>
									<View style={styles.row}>
										<View style={styles.left}>
											<Label style={styles.labelText}>City</Label>
											<Item>
												<Picker
													mode="dropdown"
													iosIcon={<Icon name="ios-arrow-dropdown" />}
													placeholder="Select City"
													style={styles.picker}
													placeholderStyle={styles.pickerPlaceholder}
													placeholderIconColor={colors.primary}
													selectedValue={this.state.selectedCity}
													onValueChange={(itemValue, itemIndex) => this.setState({ selectedCity: itemValue, indexCity: itemIndex })}
												>
													{this.renderCity()}
												</Picker>
											</Item>
										</View>
										<View style={styles.right}>
											<Item stackedLabel>
												<Label style={styles.label}>ZIP Code</Label>
												<Input style={styles.input} onChangeText={(text) => this.setState({ zipCode: text })} />
											</Item>
										</View>
									</View>
									<Label style={styles.labelText}>Country</Label>
									<Item>
										<Picker
											mode="dropdown"
											iosIcon={<Icon name="ios-arrow-dropdown" />}
											placeholder="Select Country"
											placeholderStyle={styles.pickerPlaceholder}
											placeholderIconColor={colors.primary}
											selectedValue={this.state.selectedCountry}
											onValueChange={(itemValue, itemIndex) => this.setState({ selectedCountry: itemValue, indexCountry: itemIndex })}
										>
											{this.renderCountry()}
										</Picker>
									</Item>
									<Label style={styles.labelText}>Shipping Method</Label>
									<Item>
										<Picker
											mode="dropdown"
											iosIcon={<Icon name="ios-arrow-dropdown" />}
											placeholder="Select Shipping Method"
											placeholderStyle={styles.pickerPlaceholder}
											placeholderIconColor={colors.primary}
											selectedValue={this.state.shippingMethod}
											onValueChange={(itemValue, itemIndex) => this.setState({ shippingMethod: itemValue, indexShipping: itemIndex })}
										>
											{this.renderShipping()}
										</Picker>
									</Item>
								</Form>
							</View>
						</View>
					</ScrollView>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Payment', {payment: this.state})}>
						<View style={styles.bottomButton}>
							<Text style={styles.bottomButtonText}>Continue</Text>
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
		alignItems: 'center',
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
	label: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.grey
	},
	labelText: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginLeft: 20,
		marginTop: 10
	},
	input: {
		height: 20,
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	},
	left: {
		flex: 1,
	},
	right: {
		flex: 1
	},
	picker: {
		justifyContent: 'flex-start',
		alignItems: 'flex-end'
	},
	pickerPlaceholder: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary
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
	bottomButtonText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	}
})
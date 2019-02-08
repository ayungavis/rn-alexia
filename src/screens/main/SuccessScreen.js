import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Container, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from 'library/header';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class ShippingScreen extends Component {
	constructor(props) {
		super(props)
	}

	render() {
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
						<View style={styles.dotFinished}></View>
						<View style={styles.dotFinished}></View>
						<View style={styles.dotFinished}></View>
						<Icon name="ios-checkmark-circle" size={25} color={colors.primary} />
					</View>
					<View style={styles.middleLayout}>
						<View style={styles.circle}>
							<FontAwesome5 name="gift" size={50} color={colors.primary} light />
						</View>
						<View style={styles.layoutTitle}>
							<Text style={styles.title}>Congrats!</Text>
						</View>
						<View style={styles.layoutSubtitle}>
							<Text style={styles.subtitle}>Thank you for purchasing. Your order will be shipped in 2-4 working days.</Text>
						</View>
					</View>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')}>
						<View style={styles.bottomButton}>
							<Text style={styles.bottomButtonText}>Continue Shopping</Text>
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
		flex: 1,
		height: hp('100%'),
		width: wp('100%'),
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	layoutTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	layoutSubtitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: fonts.bold,
		fontSize: hp('5%'),
		color: colors.primary,
		marginTop: 10
	},
	subtitle: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	circle: {
		width: 120,
		height: 120,
		backgroundColor: colors.lightgrey,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
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
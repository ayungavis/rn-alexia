import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, StatusBar, FlatList, Image } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Header from 'library/header';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

import 'res/data/cart';

export default class CartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: cart
		}
	}

	render() {
		let totalPrice = 0
		cart.forEach((item) => {
			totalPrice = totalPrice + item.price
		})

		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'white'} barStyle="dark-content" translucent={false} />
				<View style={styles.top}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/*<View style={styles.header}>
							<View style={styles.headerLeft}></View>
							<View style={styles.headerCenter}>
								<Text style={styles.title}>{strings.cart.title}</Text>
							</View>
							<View style={styles.headerRight}>
								<TouchableOpacity>
									<FontAwesome5 name="ellipsis-h" size={15} color={colors.primary} />
								</TouchableOpacity>
							</View>
						</View>*/}
						<Header leftIcon="chevron-left" navigation={this.props.navigation} title={strings.cart.title} rightIcon="ellipsis-h" />
						<FlatList
							data={this.state.item}
							extraData={this.state}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({item, index}) => (
								<View style={styles.cartContainer}>
									<View style={styles.leftContent}>
										<Image style={styles.image} source={item.images.thumbnail} />
										<View style={styles.textLayout}>
											<Text style={styles.title}>{item.name}</Text>
											<Text style={styles.price}>${item.price}</Text>
											{/*<Text style={styles.other}>Size: M | Color: Grey</Text>*/}
										</View>
									</View>
									<View style={styles.rightContent}>
										<View style={styles.picker}>
											<Text style={styles.pickerText}>1</Text>
											<FontAwesome5 name="chevron-down" size={10} color={colors.primary} />
										</View>
									</View>
								</View>
								/*<View style={styles.line} opacity={0.5}></View>*/
							)}
						/>
					</ScrollView>
				</View>
				<View style={styles.bottom}>
					<View style={styles.totalLayout}>
						<Text style={styles.totalText}>{strings.cart.total}</Text>
						<Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
					</View>
					<View style={styles.checkoutLayout}>
						<TouchableOpacity>
							<View style={styles.checkoutButton}>
								<Text style={styles.checkoutText}>{strings.cart.checkout}</Text>
							</View>
						</TouchableOpacity>
					</View>
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
		flex: 8
	},
	bottom: {
		flex: 2,
		backgroundColor: colors.lightgrey
	},
	cartContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
	},
	leftContent: {
		marginLeft: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	rightContent: {
		marginRight: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	image: {
		width: 50,
		height: 50,
		backgroundColor: 'grey',
		borderRadius: 5
	},
	textLayout: {
		paddingHorizontal: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	title: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	price: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.primary
	},
	other: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.grey
	},
	picker: {
		width: 40,
		height: 20,
		backgroundColor: colors.grey,
		borderRadius: 100,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	pickerText: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.primary
	},
	line: {
		width: wp('85%'),
		height: hp('0.3%'),
		borderRadius: 100,
		backgroundColor: colors.grey,
		marginTop: 10,
		marginBottom: 10,
		alignSelf: 'center'
	},
	totalLayout: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	totalText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.primary
	},
	totalPrice: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary
	},
	checkoutLayout: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	checkoutButton: {
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
	checkoutText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	}
})
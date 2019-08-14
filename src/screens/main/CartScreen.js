import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, StatusBar, Image, Alert } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import axios from 'axios';

import AppleStyleSwipeableRow from 'library/appleStyleSwipeableRow';
import Header from 'library/header';
import { getCart, updateCart, deleteCart } from 'library/redux/actions/orders';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';
import server from 'res/server';

class CartScreen extends Component {
	constructor(props) {
		super(props);
	}

	decreaseQty = (item) => {
		if(item.qty == 1)  {
			item.qty = 1
		}
		else {
			item.qty -= 1
		}
		const qty = item.qty
		this.updateCart(item.id, qty)
	}

	increaseQty = (item) => {
		if (item.qty == 9) {
			item.qty = 9
		}
		else {
			item.qty += 1	
		}
		const qty = item.qty
		this.updateCart(item.id, qty)
	}

	componentDidMount() {
		this.getCart()
	}

	updateCart(id, qty) {
		this.props.dispatch(updateCart(id, {
			qty: qty
		}))
		// this.getCart()
	}

	getCart = () => {
		this.props.dispatch(getCart())
	}

	deleteItem = (id) => () => {
		this.props.dispatch(deleteCart(id))
		this.getCart()
	}

	handleDelete = (id) => () => {
		Alert.alert(
			'Delete Product',
			'Are you sure want to delete this product?',
			[
				{
					text: 'No',
					onPress: () => console.log('Cancel Pressed'),
				},
				{
					text: 'Yes',
					onPress: this.deleteItem(id)
				},

			]
		)
	}

	handleShop() {
		this.props.navigation.state.params.onGoBack()
		this.props.navigation.navigate('Shop')
	}

	refresh() {
	 	this.getCart()
	}

	render() {
		console.disableYellowBox = true;
		let totalPrice = 0
		if (this.props.orders && this.props.orders.data) {
			this.props.orders.data.forEach((item) => {
				totalPrice += item.qty * item.price
 			})
 		}
		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'white'} barStyle="dark-content" translucent={false} />
				<View style={styles.top}>
					<Header leftIcon="chevron-left" navigation={this.props.navigation} title={strings.cart.title} rightIcon="ellipsis-h" />
				</View>
				<View style={styles.middle}>
					{this.props.orders.length > 0 ?
						<ScrollView showsVerticalScrollIndicator={false}>
							<FlatList
								data={this.props.orders.data}
								keyExtractor={(item, index) => index.toString()}
								refreshing={this.props.orders.isLoading}
								renderItem={({item, index}) => (
									<AppleStyleSwipeableRow id={item.id} carts={this.props.orders.data} navigation={this.props.navigation}>
										<TouchableOpacity onLongPress={this.handleDelete(item.id)}>
											<View style={styles.cartContainer}>
												<View style={styles.leftContent}>
													<Image style={styles.image} source={{ uri: server.image + '/' + item.product_id + '/' + item.products.thumbnail }} />
													<View style={styles.textLayout}>
														<Text style={styles.title}>{item.products.name}</Text>
														<Text style={styles.price}>${item.price}</Text>
														{/*<Text style={styles.other}>Size: M | Color: Grey</Text>*/}
													</View>
												</View>
												<View style={styles.rightContent}>
													<View style={styles.picker}>
														<TouchableOpacity onPress={() => (this.decreaseQty(item))}>
															<FontAwesome5 name="minus" size={10} color={colors.primary} />		
														</TouchableOpacity>
														<Text style={styles.pickerText}>{item.qty}</Text>
														<TouchableOpacity onPress={() => (this.increaseQty(item))}>
															<FontAwesome5 name="plus" size={10} color={colors.primary} />		
														</TouchableOpacity>
													</View>
												</View>
											</View>
											<View style={styles.line} opacity={0.5}></View>
										</TouchableOpacity>
									</AppleStyleSwipeableRow>
								)}
							/>
						</ScrollView>
					:
						<View style={styles.emptyLayout}>
							<FontAwesome5 name="shopping-bag" size={80} color={colors.grey} />
							<Text style={styles.emptyText}>{strings.cart.empty}</Text>
						</View>
					}
				</View>
				{this.props.orders.length > 0 ?
					<View style={styles.bottom}>
						<View style={styles.totalLayout}>
							<Text style={styles.totalText}>{strings.cart.total}</Text>
							<Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
						</View>
						<View style={styles.checkoutLayout}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Shipping', { onGoBack: () => this.refresh() })}>
								<View style={styles.checkoutButton}>
									<Text style={styles.checkoutText}>{strings.cart.checkout}</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				:
					<View style={styles.bottom}>
						<View style={styles.emptyBottomLayout}>
							<TouchableOpacity onPress={() => this.handleShop()}>
								<View style={styles.checkoutButton}>
									<Text style={styles.checkoutText}>{strings.cart.emptyButton}</Text>
								</View>
							</TouchableOpacity>
						</View>	
					</View>
				}
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders
	}
}

export default connect(mapStateToProps)(CartScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		flex: 1
	},
	middle: {
		flex: 7
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
		width: 50,
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
		fontSize: hp('2.5%'),
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
		elevation: 10,
		shadowRadius: 10,
		marginBottom: 10
	},
	checkoutText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: 'white'
	},
	emptyLayout: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	emptyText: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.primary,
		marginTop: 10
	},
	emptyBottomLayout: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
})
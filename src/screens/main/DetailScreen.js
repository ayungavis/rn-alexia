import React, { Component } from 'react';
import { StyleSheet, ScrollView, Animated, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Text, Tabs, Tab } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import Toast from 'react-native-easy-toast'
import IconBadge from 'react-native-icon-badge';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import axios from 'axios';

import DetailSlideshow from 'library/detailSlideshow';
import FloatingCart from 'library/floatingCart';
import { getCart, updateCart, addToCart } from 'library/redux/actions/orders';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';
import server from 'res/server';

class DetailScreen extends Component {
	constructor(props) {
		super(props)
		this.item = props.navigation.getParam('item');
		this.state = {
			qty: 1
		}
	}

	componentDidMount() {
		this.getCart()
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	refresh() {
		this.getCart()
	}

	addToCart = () => {
		let exist = false
		let currentQty = 0
		let cartId = 0
		if (this.props.orders && this.props.orders.data) {
			this.props.orders.data.map(data => {
				if (data.product_id == this.item.id) {
					exist = true
					currentQty = data.qty
					cartId = data.id
				}
			})
		}
		else return exist = false
		if (exist) {
			this.props.dispatch(updateCart(cartId, {
				qty: currentQty + 1
			}))
			this.getCart()
			this.refs.toast.show('This product is already in your bag, so the quantity increased.', 5000);
		} else {
			this.props.dispatch(addToCart({
				product_id: this.item.id,
				qty: this.state.qty,
				price: this.item.price
			}))
			this.getCart()
			this.refs.toast.show('This product has been added to your bag.', 5000);
		}
	}

	getCart = () => {
		this.props.dispatch(getCart())
	}

	handleBack() {
		this.props.navigation.state.params.onGoBack()
		this.props.navigation.goBack()
	}

	render() {
		return (
			<Container style={styles.container}>
				<View style={{ flex: 9 }}>
					<ScrollView showVerticalScrollIndicator={false}>
						<DetailSlideshow
							containerStyle={styles.slideshow}
							arrowSize={0}
							height={hp('75%')}
							dataSource={[
								{ url: server.image + '/' + this.item.id + '/' + this.item.image_one },
								{ url: server.image + '/' + this.item.id + '/' + this.item.image_two },
								{ url: server.image + '/' + this.item.id + '/' + this.item.image_three },
								{ url: server.image + '/' + this.item.id + '/' + this.item.image_four }
							]}
						/>
						<View style={styles.floatingBack}>
							<TouchableOpacity onPress={() => this.handleBack()}>
								<FontAwesome5 name='chevron-left' size={25} color='white' light />
							</TouchableOpacity>
						</View>
						<View style={styles.floatingWishlist}>
							<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
								<FontAwesome5 name='heart' size={25} color='white' light />
							</TouchableOpacity>
						</View>
						<View style={styles.floatingCart}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Cart', { onGoBack: () => this.refresh()})}>
								<FloatingCart length={this.props.orders.length} navigation={this.props.navigation} />
							</TouchableOpacity>
						</View>
						<View style={styles.headerLayout}>	
							<View style={styles.titleLayout}>
								<Text style={styles.title}>{this.item.name}</Text>
							</View>
							<Text style={styles.price}>${this.item.price}</Text>
						</View>
						<View style={styles.ratingLayout}>
							<StarRating
								disabled={true}
								emptyStar={'ios-star-outline'}
								fullStar={'ios-star'}
								halfStar={'ios-star-half'}
								iconSet={'Ionicons'}
								maxStars={5}
								starSize={20}
								rating={this.item.ratings}
								selectedStar={(rating) => this.onStarRatingPress(rating)}
								fullStarColor={colors.stars}
								emptyStarColor={colors.grey}
								starStyle={styles.ratings}
							/>
							<Text style={styles.reviews}>{this.item.reviews} reviews</Text>
						</View>
						<View style={styles.tabLayout}>
							<Tabs tabBarUnderlineStyle={{ backgroundColor: colors.primary }}>
								<Tab 
									heading="Description"
									tabStyle={styles.tab}
									activeTabStyle={styles.tabActive}
									textStyle={styles.tabText}
									activeTextStyle={styles.tabTextActive}
								>
									<View style={styles.descriptionLayout}>
										<Text style={styles.descriptionContent}>{this.item.description}</Text>
									</View>
								</Tab>
								<Tab 
									heading="Reviews"
									tabStyle={styles.tab}
									activeTabStyle={styles.tabActive}
									textStyle={styles.tabText}
									activeTextStyle={styles.tabTextActive}
								>
									<View style={styles.reviewLayout}>
										<View style={styles.reviewTitleLayout}>
											<Text style={styles.reviewRatingBig}>4.9</Text>
											<Text style={styles.reviewRatingSmall}>OUT OF 5</Text>
										</View>
										<View style={styles.progressBarLayout}>
											<View style={styles.progressBarLeft}>
												<Text style={styles.progressBarLeftText}>5</Text>
												<Icon name="ios-star" size={15} color={colors.stars} />
											</View>
											<View style={styles.progressBarMiddle}>
												<Progress.Bar 
													progress={this.item.rating_five/100}
													width={wp('65%')}
													color={colors.primary}
													unfilledColor={colors.grey}
													borderWidth={0}
												/>
											</View>
											<View style={styles.progressBarRight}>
												<Text style={styles.progressBarRightText}>{this.item.rating_five}%</Text>
											</View>
										</View>
										<View style={styles.progressBarLayout}>
											<View style={styles.progressBarLeft}>
												<Text style={styles.progressBarLeftText}>4</Text>
												<Icon name="ios-star" size={15} color={colors.stars} />
											</View>
											<View style={styles.progressBarMiddle}>
												<Progress.Bar 
													progress={this.item.rating_four/100}
													width={wp('65%')}
													color={colors.primary}
													unfilledColor={colors.grey}
													borderWidth={0}
												/>
											</View>
											<View style={styles.progressBarRight}>
												<Text style={styles.progressBarRightText}>{this.item.rating_four}%</Text>
											</View>
										</View>
										<View style={styles.progressBarLayout}>
											<View style={styles.progressBarLeft}>
												<Text style={styles.progressBarLeftText}>3</Text>
												<Icon name="ios-star" size={15} color={colors.stars} />
											</View>
											<View style={styles.progressBarMiddle}>
												<Progress.Bar 
													progress={this.item.rating_three/100}
													width={wp('65%')}
													color={colors.primary}
													unfilledColor={colors.grey}
													borderWidth={0}
												/>
											</View>
											<View style={styles.progressBarRight}>
												<Text style={styles.progressBarRightText}>{this.item.rating_three}%</Text>
											</View>
										</View>
										<View style={styles.progressBarLayout}>
											<View style={styles.progressBarLeft}>
												<Text style={styles.progressBarLeftText}>2</Text>
												<Icon name="ios-star" size={15} color={colors.stars} />
											</View>
											<View style={styles.progressBarMiddle}>
												<Progress.Bar 
													progress={this.item.rating_two/100}
													width={wp('65%')}
													color={colors.primary}
													unfilledColor={colors.grey}
													borderWidth={0}
												/>
											</View>
											<View style={styles.progressBarRight}>
												<Text style={styles.progressBarRightText}>{this.item.rating_two}%</Text>
											</View>
										</View>
										<View style={styles.progressBarLayout}>
											<View style={styles.progressBarLeft}>
												<Text style={styles.progressBarLeftText}>1</Text>
												<Icon name="ios-star" size={15} color={colors.stars} />
											</View>
											<View style={styles.progressBarMiddle}>
												<Progress.Bar 
													progress={this.item.rating_one/100}
													width={wp('65%')}
													color={colors.primary}
													unfilledColor={colors.grey}
													borderWidth={0}
												/>
											</View>
											<View style={styles.progressBarRight}>
												<Text style={styles.progressBarRightText}>{this.item.rating_one}%</Text>
											</View>
										</View>
										<View style={styles.dividerLayout}>
											<View style={{ flex: 5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
												<Text style={styles.dividerText}>13 Reviews</Text>
											</View>
											<View style={{ flex: 5, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
												<Text style={styles.dividerText}>WRITE A REVIEW </Text><Icon name="ios-create" size={15} color={colors.grey} />
											</View>
										</View>
										<View style={styles.commentarLayout}>
											<View style={styles.commentarLeft}>
												<View style={styles.commentarAvatar} />
											</View>
											<View style={styles.commentarRight}>
												<Text style={styles.commentarName}>Ayung Avis</Text>
												<View style={styles.commentarStarLayout}>
													<StarRating 
														disabled={true}
														emptyStar={'ios-star-outline'}
														fullStar={'ios-star'}
														halfStar={'ios-star-half'}
														iconSet={'Ionicons'}
														maxStars={5}
														starSize={15}
														rating={this.item.ratings}
														selectedStar={(rating) => this.onStarRatingPress(rating)}
														fullStarColor={colors.stars}
														emptyStarColor={colors.grey}
														starStyle={styles.ratings}
													/>
													<Text style={styles.commentarRatingText}>4 OUT OF 5, Oct 20, 2019</Text>
												</View>
												<Text style={styles.commentarText}>Lorem ipsum dolrest ammet because another get the task without any challenging action.</Text>
											</View>
										</View>
									</View>
								</Tab>
							</Tabs>
						</View>
					</ScrollView>
				</View>
				<View style={{ flex: 1 }}>
					<View style={styles.floatingButton}>
						<TouchableOpacity onPress={() => this.addToCart()}>
							<View style={styles.bottomButton}>
								<FontAwesome5 name="shopping-bag" size={15} color={colors.primary} /><Text style={styles.bottomButtonText}>  {strings.shop.addcart}</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<Toast
                    ref="toast"
                    style={styles.toast}
                    position='top'
                    positionValue={80}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={styles.toastText}
                />
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders
	}
}

export default connect(mapStateToProps)(DetailScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	tabBar: {
		flexDirection: 'row',
		paddingTop: 10,
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
	},
	buttonBack: {
		position: 'absolute',
		top: 40,
		bottom: 0,
		left: 20,
		right: 0,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	buttonWishlist: {
		position: 'absolute',
		top: 40,
		bottom: 0,
		left: 0,
		right: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		backgroundColor: 'transparent',
	},
	headerLayout: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20
	},
	titleLayout: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		flexWrap: 'wrap',
		paddingRight: 20
	},
	title: {
		fontFamily: fonts.bold,
		fontSize: hp('3.5%'),
		color: colors.primary
	},
	priceLayout: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	price: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary
	},
	ratingLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 5,
		marginLeft: 20,
		marginBottom: 20,
	},
	reviews: {
		fontFamily: fonts.regular,
		fontSize: hp('2.2%'),
		color: colors.grey,
		marginLeft: 10
	},
	ratings: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	descriptionLayout: {
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 20
	},
	descriptionTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('3.5%'),
		color: colors.primary,
		marginBottom: 10
	},
	descriptionContent: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	floatingCart: {
		position: 'absolute',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		top: 40,
		right: 20,
	},
	floatingButton: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignSelf: 'center',
		bottom: 20
	},
	bottomButton: {
		backgroundColor: 'white',
		borderColor: colors.primary,
		borderRadius: 50,
		borderWidth: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: wp('75%'),
		height: hp('7%'),
		alignSelf: 'flex-end'
	},
	bottomButtonText: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	floatingBack: {
		position: 'absolute',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		top: 40,
		left: 20
	},
	floatingWishlist: {
		position: 'absolute',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		top: 40,
		right: 60
	},
	toast: {
		backgroundColor: colors.primary,
		width: wp('80%'),
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	toastText: {
		fontFamily: fonts.regular, 
		fontSize: hp('2.5%'), 
		color: 'white'
	},
	reviewLayout: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
	},
	reviewTitleLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		marginBottom: 20
	},
	reviewRatingBig: {
		fontFamily: fonts.bold,
		fontSize: hp('8%'),
		color: colors.primary
	},
	reviewRatingSmall: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginLeft: 5,
		bottom: 8,
	},
	progressBarLayout: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 5,
	},
	progressBarLeft: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	progressBarMiddle: {
		flex: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	progressBarRight: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	progressBarLeftText: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginRight: 5
	},
	progressBarRightText: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.primary
	},
	dividerLayout: {
		marginTop: 15,
		marginBottom: 15,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	dividerText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.grey
	},
	commentarLayout: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginBottom: 10
	},
	commentarLeft: {
		flex: 2,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	commentarRight: {
		flex: 8,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	commentarAvatar: {
		borderRadius: 100,
		width: 50,
		height: 50,
		backgroundColor: colors.grey
	},
	commentarName: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary,
		marginBottom: 3
	},
	commentarStarLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 3
	},
	commentarRatingText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.grey,
		marginLeft: 10
	},
	commentarText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.primary,
		lineHeight: 18,
	},
	tabLayout: {
		marginTop: 10,
		marginBottom: 20
	},
	tab: {
		backgroundColor: 'white',
	},
	tabActive: {
		backgroundColor: 'white',
		borderColor: colors.primary
	},
	tabText: {
		fontFamily: fonts.regular,
		color: colors.primary
	},
	tabTextActive: {
		fontFamily: fonts.bold,
		color: colors.primary
	}
})
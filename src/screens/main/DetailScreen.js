import React, { Component } from 'react';
import { StyleSheet, ScrollView, Animated, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

import DetailSlideshow from 'library/detailSlideshow';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

import 'res/data/cart';

export default class DetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: this.props.navigation.getParam('item'),
			position: 1,
			cart
		}
		this.addToCart = () => {
			cart.push(this.state.products)
			this.props.navigation.navigate('Cart')
		}
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	render() {
		return(
			<Container style={styles.container}>
			<View style={{ flex: 9 }}>
				<ScrollView showVerticalScrollIndicator={false}>
					<DetailSlideshow
						navigation={this.props.navigation}
						containerStyle={styles.slideshow}
						arrowSize={0}
						scrollEnabled={true}
						height={hp('70%')}
						onPositionChanged={position => this.setState({ position })}
						dataSource={[
							{ url: this.state.products.images.one },
							{ url: this.state.products.images.two },
							{ url: this.state.products.images.three },
							{ url: this.state.products.images.four }
						]}
					/>
					<View style={styles.headerLayout}>	
						<View style={styles.titleLayout}>
							<Text style={styles.title}>{this.state.products.name}</Text>
						</View>
						<Text style={styles.price}>${this.state.products.price}</Text>
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
					        rating={this.state.products.ratings}
					        selectedStar={(rating) => this.onStarRatingPress(rating)}
					        fullStarColor={colors.stars}
					        emptyStarColor={colors.grey}
					        starStyle={styles.ratings}
					    />
						<Text style={styles.reviews}>{this.state.products.review} reviews</Text>
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
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
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
		marginTop: 15,
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
		marginTop: 0,
		marginLeft: 20
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
	floatingButton: {
		position: 'absolute',
		flexDirection: 'row',		
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignSelf: 'center',
		bottom: 20
	},
	bottomButton: {
		backgroundColor: 'transparent',
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
	}
})
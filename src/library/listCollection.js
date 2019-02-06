import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';
import slider from 'res/slider';

export default class ListCollection extends Component {
	constructor(props) {
		super(props);
		this.productDetail = (
			id, 
			name, 
			lowname, 
			description, 
			category_id, 
			price, 
			ratings,
			rating_one,
			rating_two,
			rating_three,
			rating_four,
			rating_five,
			review,
			newproduct,
			collection,
			top,
			wishlist,
			cart,
			stock,
			thumbnail,
			image_one,
			image_two,
			image_three,
			image_four
		) => { this.props.navigation.navigate('Detail', 
			id, 
			name, 
			lowname, 
			description, 
			category_id, 
			price, 
			ratings,
			rating_one,
			rating_two,
			rating_three,
			rating_four,
			rating_five,
			review,
			newproduct,
			collection,
			top,
			wishlist,
			cart,
			stock,
			thumbnail,
			image_one,
			image_two,
			image_three,
			image_four
		)};
		this.state = {
			data: products,
			wishlistdata: wishlist
		}
	}

	addToWishlist = () => {
		this.setState({wishlist: 1})
		wishlistdata.push(this.data.id)
	}

	render() {
		return(
			<TouchableOpacity 
				onPress={this.productDetail(
					this.props.id,
					this.props.name,
					this.props.lowname,
					this.props.description,
					this.props.category_id,
					this.props.price,
					this.props.ratings,
					this.props.rating_one,
					this.props.rating_two,
					this.props.rating_three,
					this.props.rating_four,
					this.props.rating_five,
					this.props.review,
					this.props.new,
					this.props.collection,
					this.props.top,
					this.props.wishlist,
					this.props.cart,
					this.props.stock,
					this.props.thumbnail,
					this.props.image_one,
					this.props.image_two,
					this.props.image_thre,
					this.props.image_four
				)}
			>
				<View style={styles.upperCatalogueContainer}>
					<ImageBackground style={styles.upperCatalogueImage} source={this.props.thumbnail}>
						<View style={styles.upperCatalogueBadgeLayout}>
							<TouchableOpacity style={styles.upperCatalogueBadge} onPress={this.addToWishlist}>
								{this.props.wishlist ? <Icon name='ios-heart' size={10} color={colors.love} /> : <Icon name='ios-heart' size={10} color={colors.grey} /> }
							</TouchableOpacity>
						</View>
						{this.props.new ?
							<View style={styles.upperCatalogueLabelLayout}>
								<View style={styles.upperCatalogueLabel}>
									<Text style={styles.upperCatalogueLabelText}>NEW</Text>
								</View>
							</View>
							: ''
						}
					</ImageBackground>
					<Text style={styles.upperCatalogueTitle}>{this.props.lowname}</Text>
					<Text style={styles.upperCataloguePrice}>${this.props.price}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	upperCatalogueContainer: {
		flexDirection: 'column', 
		justifyContent: 'flex-start', 
		alignItems: 'flex-start', 
		width: wp('35%'), 
		height: hp('30%'), 
		backgroundColor: 'transparent', 
		marginRight: 10, 		
	},
	upperCatalogueImage: {
		width: 135,
		height: 135,
		borderRadius: 10,
	},
	upperCatalogueBadgeLayout: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginRight: 10,
		marginTop: 10,
	},
	upperCatalogueBadge: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 100,
		height: 25,
		width: 25
	},
	upperCatalogueLabelLayout: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginBottom: 10,
		marginLeft: 10
	},
	upperCatalogueLabel: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 100,
		height: 20,
		width: 50
	},
	upperCatalogueLabelText: {
		fontFamily: fonts.regular,
		fontSize: hp('1.5%'),
		color: colors.primary
	},
	upperCatalogueTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	upperCataloguePrice: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.primary
	}
})
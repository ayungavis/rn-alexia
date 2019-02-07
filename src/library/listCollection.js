import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';
import slider from 'res/slider';

import 'res/data/wishlist';

export default class ListCollection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.item,
			wishlist: wishlist
		}
		this.productDetail = () => {
			this.props.navigation.navigate('DetailScreen', {
				item: this.state.item
			})
		}
		this.addToWishlist = (id) => {
			this.setState({wishlist: 1})
			wishlist.push(id)
		}
	}

	render() {
		return(
			<View>
				<TouchableOpacity onPress={() => this.productDetail()}>
					<View style={styles.upperCatalogueContainer}>
						<ImageBackground style={styles.upperCatalogueImage} source={this.state.item.images.thumbnail}>
							<View style={styles.upperCatalogueBadgeLayout}>
								<TouchableOpacity style={styles.upperCatalogueBadge} onPress={this.addToWishlist(this.state.item.id)}>
									{this.state.item.wishlist ? <Icon name='ios-heart' size={10} color={colors.love} /> : <Icon name='ios-heart' size={10} color={colors.grey} /> }
								</TouchableOpacity>
							</View>
							{this.state.item.new ?
								<View style={styles.upperCatalogueLabelLayout}>
									<View style={styles.upperCatalogueLabel}>
										<Text style={styles.upperCatalogueLabelText}>NEW</Text>
									</View>
								</View>
								: <View></View>
							}
						</ImageBackground>
						<Text style={styles.upperCatalogueTitle}>{this.state.item.lowname}</Text>
						<Text style={styles.upperCataloguePrice}>${this.state.item.price}</Text>
					</View>
				</TouchableOpacity>
			</View>
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
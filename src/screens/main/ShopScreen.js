import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, ImageBackground, StatusBar, ScrollView, Image } from 'react-native'; 
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-slideshow';

import ListCollection from 'library/listCollection';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

import 'res/data/products';
import 'res/data/wishlist';

export default class ShopScreen extends Component {
	constructor(props) {
		super(props);
		this.productDetail = (id, name, lowname, description, category_id, price, ratings, rating_one, rating_two, rating_three, rating_four, rating_five, review, newproduct, collection, top, wishlist, cart, stock, thumbnail, image_one, image_two, image_three, image_four) => () => {
			this.props.navigation.navigate('Detail', { id, name, lowname, description, category_id, price, ratings, rating_one, rating_two, rating_three, rating_four, rating_five, review, newproduct, collection, top, wishlist, cart, stock, thumbnail, image_one, image_two, image_three, image_four });
		},
		this.addToWishlist = (id) => () => {
			this.setState({wishlist: 1})
			wishlist.push(id)
		},
		this.state = {
			position: 1,
			interval: null,
			dataSource: [
				{
					title: '20% OFF',
					caption: 'For Selected Spring Style',
					category: 'SPRING COLLECTION',
					screen: '',
					url: require('res/images/slider-one.png'),
				}, {
					title: 'FLASH SALE',
					caption: 'Special Chinese New Year',
					category: 'CHINESE NEW YEAR',
					screen: '',
					url: require('res/images/slider-two.png'),
				}, {
					title: 'UP TO 50%',
					caption: 'Trending Design of This Week',
					category: 'TRENDING DESIGN',
					screen: '',
					url: require('res/images/slider-three.png'),
				},
			],
			products: products,
			wishlist: wishlist
		}
	}

	componentWillMount() {
		this.setState({
			interval: setInterval(() => {
				this.setState({
					position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
				})
			}, 3000)
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.interval)
	}

	render() {
		return(
			<Container style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>				
					<StatusBar backgroundColor={'transparent'} barStyle="light-content" translucent={true} />
					<Slideshow
						dataSource={this.state.dataSource}
						position={this.state.position}
						onPositionChanged={position => this.setState({ position })}
						height={hp('50%')}
						arrowSize={0}
					/>
					<View style={styles.upperCatalogueHeader}>
						<Text style={styles.catalogueTitle}>{strings.shop.catalogue.upper.title}</Text>
						<TouchableOpacity>
							<Text style={styles.catalogueViewAll}>{strings.shop.catalogue.upper.more}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.upperCatalogueContainerLayout}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>							
							<FlatList
								horizontal={true}
								data={this.state.products}
								keyExtractor={(item, index) => index.toString()}
								renderItem={({item, index}) => (
									<View>
									{item.collection == 1 ?
										<TouchableOpacity onPress={this.productDetail(item.id, item.name, item.lowname, item.description, item.category_id, item.price, item.ratings, item.rating_one, item.rating_two, item.rating_three, item.rating_four, item.rating_five, item.review, item.new, item.collection, item.top, item.wishlist, item.cart, item.stock, item.thumbnail, item.image_one, item.image_two, item.image_thre, item.image_four)}>
											<View style={styles.upperCatalogueContainer}>
												<ImageBackground style={styles.upperCatalogueImage} source={item.images.thumbnail}>
													<View style={styles.upperCatalogueBadgeLayout}>
														<TouchableOpacity style={styles.upperCatalogueBadge} onPress={this.addToWishlist(item.id)}>
															{item.wishlist ? <Icon name='ios-heart' size={10} color={colors.love} /> : <Icon name='ios-heart' size={10} color={colors.grey} /> }
														</TouchableOpacity>
													</View>
													{item.new ?
														<View style={styles.upperCatalogueLabelLayout}>
															<View style={styles.upperCatalogueLabel}>
																<Text style={styles.upperCatalogueLabelText}>NEW</Text>
															</View>
														</View>
														: <View></View>
													}
												</ImageBackground>
												<Text style={styles.upperCatalogueTitle}>{item.lowname}</Text>
												<Text style={styles.upperCataloguePrice}>${item.price}</Text>
											</View>
										</TouchableOpacity> : <View></View>
									}
									</View>
								)} 
							/>
						</ScrollView>
					</View>
					<View style={styles.lowerCatalogueHeader}>
						<Text style={styles.catalogueTitle}>{strings.shop.catalogue.lower.title}</Text>
						<TouchableOpacity>
							<Text style={styles.catalogueViewAll}>{strings.shop.catalogue.lower.more}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.lowerCatalogueContainerLayout}>
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
							<FlatList
								horizontal={true}
								data={this.state.products}
								keyExtractor={(item, index) => index.toString()}
								renderItem={({item, index}) => (
									<View>
										{item.top == 1 ?
											<View style={styles.lowerCatalogueContainerBig}>
												<TouchableOpacity>
													<View style={styles.lowerCatalogueContainerSmall}>
														<Image style={styles.lowerCatalogueImage} source={item.images.thumbnail} />
														<View style={styles.lowerCatalogueTitleLayout}>
															<Text style={styles.lowerCatalogueTitle}>{item.name}</Text>
															<Text style={styles.lowerCataloguePrice}>${item.price}</Text>
														</View>
													</View>
												</TouchableOpacity>
												<TouchableOpacity>
													<View style={styles.lowerCatalogueContainerSmall}>
														<Image style={styles.lowerCatalogueImage} source={item.images.thumbnail} />
														<View style={styles.lowerCatalogueTitleLayout}>
															<Text style={styles.lowerCatalogueTitle}>{item.name}</Text>
															<Text style={styles.lowerCataloguePrice}>${item.price}</Text>
														</View>
													</View>
												</TouchableOpacity>
												<TouchableOpacity>
													<View style={styles.lowerCatalogueContainerSmall}>
														<Image style={styles.lowerCatalogueImage} source={item.images.thumbnail} />
														<View style={styles.lowerCatalogueTitleLayout}>
															<Text style={styles.lowerCatalogueTitle}>{item.name}</Text>
															<Text style={styles.lowerCataloguePrice}>${item.price}</Text>
														</View>
													</View>
												</TouchableOpacity>
											</View> : <View></View>
										}
									</View>
								)}
							/>
						</ScrollView>
					</View>
					<View style={styles.limit}>

					</View>
				</ScrollView>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	upperCatalogueHeader: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'flex-end', 
		paddingHorizontal: 20, 
		marginTop: 10
	},
	catalogueTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('3.5%'),
		color: colors.primary,
	},
	catalogueViewAll: {
		fontFamily: fonts.regular,
		fontSize: hp('2.2%'),
		color: colors.grey,
	},
	upperCatalogueContainerLayout: {	
		flexDirection: 'row',
		alignItems: 'flex-start',
		top: 15,
		marginLeft: 20
	},
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
	},
	lowerCatalogueHeader: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'flex-end', 
		paddingHorizontal: 20, 
		marginTop: 40
	},
	lowerCatalogueContainerLayout: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		top: 15,
		marginLeft: 20
	},
	lowerCatalogueContainerBig: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: wp('55%'), 
		height: hp('33%'), 
		backgroundColor: 'transparent', 
		marginRight: 10,
		marginBottom: 20,
	},
	lowerCatalogueContainerSmall: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: wp('50%'), 
		height: hp('10%'), 
		backgroundColor: 'transparent', 
	},
	lowerCatalogueImage: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},
	lowerCatalogueTitleLayout: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: 8,
	},
	lowerCatalogueTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	lowerCataloguePrice: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.primary
	}
})
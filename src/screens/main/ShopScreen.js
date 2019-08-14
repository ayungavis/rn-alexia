import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, ImageBackground, StatusBar, ScrollView, Image } from 'react-native'; 
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux';
import axios from 'axios';

import ListCollection from 'library/listCollection';
import FloatingCart from 'library/floatingCart';
import { getCollection } from 'library/redux/actions/products/collections';
import { getTop } from 'library/redux/actions/products/tops';
import { getCart } from 'library/redux/actions/orders';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';
import server from 'res/server';

class ShopScreen extends Component {
	constructor(props) {
		super(props);
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
			]
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

	componentDidMount() {
		this.getCollection()
		this.getTop()
		this.getCart()
	}

	refresh() {
		this.getCart()
	}

	getCart = () => {
		this.props.dispatch(getCart())
	}

	getCollection = () => {
		this.props.dispatch(getCollection())
	}

	getTop = () => {
		this.props.dispatch(getTop())
	}

	_keyExtractor = (item, index) => item.id.toString();

	renderCollection = ({ item, index }) => (
		<TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {item, onGoBack: () => this.refresh()})}>
			<View style={styles.upperCatalogueContainer}>
				<ImageBackground style={styles.upperCatalogueImage} source={{ uri: server.image + '/' + item.id + '/' + item.thumbnail }}>
					<View style={styles.upperCatalogueBadgeLayout}>
						<TouchableOpacity style={styles.upperCatalogueBadge}>
							{item.in_wishlist ? <Icon name='ios-heart' size={10} color={colors.love} /> : <Icon name='ios-heart' size={10} color={colors.grey} /> }
						</TouchableOpacity>
					</View>
					{item.new_item ?
						<View style={styles.upperCatalogueLabelLayout}>
							<View style={styles.upperCatalogueLabel}>
								<Text style={styles.upperCatalogueLabelText}>NEW</Text>
							</View>
						</View>
						: <View></View>
					}
				</ImageBackground>
				<Text style={styles.upperCatalogueTitle}>{item.shortname}</Text>
				<Text style={styles.upperCataloguePrice}>${item.price}</Text>
			</View>
		</TouchableOpacity>
	)

	renderTop = ({ item, index }) => (
		<TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {item, onGoBack: () => this.refresh()})}>
			<View style={styles.lowerCatalogueContainerSmall}>
				<Image style={styles.lowerCatalogueImage} source={{ uri: server.image + '/' + item.id + '/' + item.thumbnail }} />
				<View style={styles.lowerCatalogueTitleLayout}>
					<Text style={styles.lowerCatalogueTitle}>{item.shortname}</Text>
					<Text style={styles.lowerCataloguePrice}>${item.price}</Text>
				</View>
			</View>
		</TouchableOpacity>
	) 

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
					<View style={styles.floatingCart}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Cart', { onGoBack: () => this.refresh()})}>
							<FloatingCart length={this.props.orders.length} navigation={this.props.navigation} />
						</TouchableOpacity>
					</View>
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
								data={this.props.collections.data}
								keyExtractor={this._keyExtractor}
								renderItem={this.renderCollection}
								// refreshing={this.props.collections.isLoading}
								// onRefresh={this.getCollection}
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
								numColumns={4}
								data={this.props.tops.data}
								keyExtractor={this._keyExtractor}
								renderItem={this.renderTop}
								// refreshing={this.props.tops.isLoading}
								// onRefresh={this.getTop}
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

const mapStateToProps = (state) => {
	return {
		collections: state.collections,
		tops: state.tops,
		orders: state.orders
	}
}

export default connect(mapStateToProps)(ShopScreen)

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
		marginBottom: 10,
		marginRight: 10,
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
		paddingHorizontal: 8
	},
	lowerCatalogueTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary,
	},
	lowerCataloguePrice: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.primary
	},
	limit: {
		flexDirection: 'row',
		marginTop: 10,
		marginRight: 10
	},
	floatingCart: {
		position: 'absolute',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		top: 40,
		right: 20,
	}
})
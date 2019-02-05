import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, ImageBackground, StatusBar, ScrollView, Image } from 'react-native'; 
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-slideshow';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class ShopScreen extends Component {
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

			],
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
							<TouchableOpacity>
								<View style={styles.upperCatalogueContainer}>
									<ImageBackground style={styles.upperCatalogueImage} source={images.products.one}>
										<View style={styles.upperCatalogueBadgeLayout}>
											<TouchableOpacity style={styles.upperCatalogueBadge}>
												<Icon name='ios-heart' size={10} color={colors.love} />
											</TouchableOpacity>
										</View>
										<View style={styles.upperCatalogueLabelLayout}>
											<View style={styles.upperCatalogueLabel}>
												<Text style={styles.upperCatalogueLabelText}>NEW</Text>
											</View>
										</View>
									</ImageBackground>
									<Text style={styles.upperCatalogueTitle}>Main Title</Text>
									<Text style={styles.upperCataloguePrice}>$44.99</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.upperCatalogueContainer}>
									<ImageBackground style={styles.upperCatalogueImage} source={images.products.two}>
										<View style={styles.upperCatalogueBadgeLayout}>
											<TouchableOpacity style={styles.upperCatalogueBadge}>
													<Icon name='ios-heart' size={10} color={colors.grey} />
											</TouchableOpacity>
										</View>
									</ImageBackground>
									<Text style={styles.upperCatalogueTitle}>Berrybenka Label</Text>
									<Text style={styles.upperCataloguePrice}>$39.99</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.upperCatalogueContainer}>
									<ImageBackground style={styles.upperCatalogueImage} source={images.products.three}>
										<View style={styles.upperCatalogueBadgeLayout}>
											<TouchableOpacity style={styles.upperCatalogueBadge}>
													<Icon name='ios-heart' size={10} color={colors.love} />
											</TouchableOpacity>
										</View>
									</ImageBackground>
									<Text style={styles.upperCatalogueTitle}>Callie Cotton</Text>
									<Text style={styles.upperCataloguePrice}>$29.99</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.upperCatalogueContainer}>
									<ImageBackground style={styles.upperCatalogueImage} source={images.products.four}>
										<View style={styles.upperCatalogueBadgeLayout}>
											<TouchableOpacity style={styles.upperCatalogueBadge}>
													<Icon name='ios-heart' size={10} color={colors.love} />
											</TouchableOpacity>
										</View>
										<View style={styles.upperCatalogueLabelLayout}>
											<View style={styles.upperCatalogueLabel}>
												<Text style={styles.upperCatalogueLabelText}>NEW</Text>
											</View>
										</View>
									</ImageBackground>
									<Text style={styles.upperCatalogueTitle}>Lovadova Girl</Text>
									<Text style={styles.upperCataloguePrice}>$44.99</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.upperCatalogueContainer}>
									<ImageBackground style={styles.upperCatalogueImage} source={images.products.five}>
										<View style={styles.upperCatalogueBadgeLayout}>
											<TouchableOpacity style={styles.upperCatalogueBadge}>
													<Icon name='ios-heart' size={10} color={colors.grey} />
											</TouchableOpacity>
										</View>
									</ImageBackground>
									<Text style={styles.upperCatalogueTitle}>Atom Dress</Text>
									<Text style={styles.upperCataloguePrice}>$59.99</Text>
								</View>
							</TouchableOpacity>
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
							<View style={styles.lowerCatalogueContainerBig}>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.one} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Mid Rise Jeggings</Text>
											<Text style={styles.lowerCataloguePrice}>$49.99</Text>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.two} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Lawless Highwed</Text>
											<Text style={styles.lowerCataloguePrice}>$39.99</Text>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.three} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Knee Embroidery</Text>
											<Text style={styles.lowerCataloguePrice}>$29.99</Text>
										</View>
									</View>
								</TouchableOpacity>
							</View>
							<View style={styles.lowerCatalogueContainerBig}>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.four} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Vice High Waisted</Text>
											<Text style={styles.lowerCataloguePrice}>$24.99</Text>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.five} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Karly Long Sleeve</Text>
											<Text style={styles.lowerCataloguePrice}>$34.99</Text>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.six} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Rebecca Shirt</Text>
											<Text style={styles.lowerCataloguePrice}>$39.99</Text>
										</View>
									</View>
								</TouchableOpacity>
							</View>
							<View style={styles.lowerCatalogueContainerBig}>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.seven} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Bet Mock Neck Rib</Text>
											<Text style={styles.lowerCataloguePrice}>$48.99</Text>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.eight} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>Nadine Zip Front</Text>
											<Text style={styles.lowerCataloguePrice}>$35.99</Text>
										</View>
									</View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.lowerCatalogueContainerSmall}>
										<Image style={styles.lowerCatalogueImage} source={images.products.nine} />
										<View style={styles.lowerCatalogueTitleLayout}>
											<Text style={styles.lowerCatalogueTitle}>The One Boyfriend</Text>
											<Text style={styles.lowerCataloguePrice}>$24.99</Text>
										</View>
									</View>
								</TouchableOpacity>
							</View>
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
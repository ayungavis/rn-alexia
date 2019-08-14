import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, ImageBackground, ScrollView } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

class ProfileScreen extends Component {
	render() {
		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'transparent'} barStyle="light-content" translucent={true} />
				{this.props.auth.isLogin ?
					<ScrollView>
						<ImageBackground source={{ uri: this.props.auth.data.user.cover_photo }} style={styles.cover}></ImageBackground>
						<Image source={{ uri: this.props.auth.data.user.photo }} style={styles.profile} />
						<Text style={styles.name}>{this.props.auth.data.user.name}</Text>
						<Text style={styles.description}>{this.props.auth.data.user.description}</Text>
						<View style={styles.menuLayout}>
							<View style={styles.menuBodyTop}>
								<RectButton style={styles.menuContainer} onPress={() => this.props.navigation.navigate('Login')}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="user-alt" size={20} color={colors.grey} />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Account</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer} onPress={() => this.props.navigation.navigate('Register')}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="sign-out-alt" size={20} color={colors.grey} />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Log Out</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
							</View>
							<RectButton style={styles.menuBodyBottom}>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="bell" size={20} color={colors.grey} solid />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Notifications</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="mobile-alt" size={20} color={colors.grey} solid />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Devices</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="comment-alt" size={20} color={colors.grey} solid />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Language</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="info-circle" size={20} color={colors.grey} />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Help</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
							</RectButton>
						</View>
					</ScrollView>
				:
					<ScrollView>
						<ImageBackground source={images.cover} style={styles.cover}></ImageBackground>
						<Image source={images.profile} style={styles.profile} />
						<Text style={styles.name}>Hi, Guest!</Text>
						<Text style={styles.description}>Please sign in or sign up first.</Text>
						<View style={styles.menuLayout}>
							<View style={styles.menuBodyTop}>
								<RectButton style={styles.menuContainer} onPress={() => this.props.navigation.navigate('Login')}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="sign-in-alt" size={20} color={colors.grey} />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Login</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer} onPress={() => this.props.navigation.navigate('Register')}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="user-alt" size={20} color={colors.grey} />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Register</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
							</View>
							<RectButton style={styles.menuBodyBottom}>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="bell" size={20} color={colors.grey} solid />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Notifications</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="mobile-alt" size={20} color={colors.grey} solid />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Devices</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="comment-alt" size={20} color={colors.grey} solid />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Language</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
								<View style={styles.line}></View>
								<RectButton style={styles.menuContainer}>
									<View style={styles.menuLeft}>
										<FontAwesome5 name="info-circle" size={20} color={colors.grey} />
									</View>
									<View style={styles.menuMiddle}>
										<Text style={styles.menutText}>Help</Text>
									</View>
									<View style={styles.menuRight}>
										<FontAwesome5 name="angle-right" size={20} color={colors.grey} />
									</View>
								</RectButton>
							</RectButton>
						</View>
					</ScrollView>
				}
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(ProfileScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightgrey
	},
	cover: {
		width: wp('100%'),
		height: hp('40%')
	},
	profile: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: 70,
		height: 70,
		top: 60,
		borderRadius: 100
	},
	name: {
		position: 'absolute',
		justifyContent: 'center',
		alignSelf: 'center',
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: 'white',
		top: 140
	},
	description: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		textAlign: 'center',
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: 'white',
		width: wp('60%'),
		top: 170
	},
	menuLayout: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 20
	},
	menuBodyTop: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: wp('90%'),
		height: 100,
		backgroundColor: 'white',
		borderRadius: 10,
		top: -20,
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
	},
	menuBodyBottom: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: wp('90%'),
		height: 200,
		backgroundColor: 'white',
		borderRadius: 10,
		top: -20,
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		marginTop: 20
	},
	menuContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: wp('90%')
	},
	menuLeft: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 15
	},
	menuMiddle: {
		flex: 8,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: 5
	},
	menuRight: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: 20
	},
	menutText: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.primary,
	},
	line: {
		width: wp('80%'),
		height: 1,
		borderRadius: 100,
		backgroundColor: colors.grey,
		alignItems: 'center'
	},
})
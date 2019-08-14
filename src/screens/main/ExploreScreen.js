import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, StatusBar } from 'react-native';
import { Container, Text, Item, Input, Icon } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class ExploreScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent={true} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.top}>
						<Text style={styles.title}>Explore</Text>
						<Item regular style={styles.searchBox}>
							<Icon type="FontAwesome" name="search" style={styles.searchIcon} />
							<Input style={styles.searchText} placeholder="Search" />
							<Icon type="FontAwesome" name="microphone" style={styles.searchIcon} />
						</Item>
					</View>
					<View style={styles.floatingCart}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
							<FontAwesome5 name="shopping-bag" size={25} color={colors.grey} />
						</TouchableOpacity>
					</View>
					<View style={styles.bottom}>
						<TouchableWithoutFeedback>
							<View style={styles.contentContainer}>
								<Image style={styles.contentImage} source={{ uri: 'https://static-id.zacdn.com/cms/canvas/322x300_HOMEPAGE_DAYTONIGHTDRESSES_WOMEN_820391.jpg' }}></Image>
								<Text style={styles.contentTitle}>Spring Collection</Text>
								<Text style={styles.contentCaption}>UP TO 20% OFF</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback>
							<View style={styles.contentContainer}>
								<Image style={styles.contentImage} source={{ uri: 'https://static-id.zacdn.com/cms/homepage/322x300_HOMEPAGE_HANDBAGSUPTO70_WOMEN.jpg' }}></Image>
								<Text style={styles.contentTitle}>Valentine Gift</Text>
								<Text style={styles.contentCaption}>UP TO 10% OFF</Text>
							</View>
						</TouchableWithoutFeedback>
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
	top: {
		flex: 2,
		height: hp('20%'),
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginLeft: 20,
		marginTop: 20
	},
	bottom: {
		flex: 8,
		margin: 20
	},
	title: {
		fontFamily: fonts.bold,
		fontSize: hp('6%'),
		color: colors.primary
	},
	contentContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		height: 300,
		shadowColor: colors.primary,
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
		backgroundColor: 'grey',
		marginBottom: 15
	},
	contentImage: {
		height: 300,
		width: wp('90%'),
		position: 'absolute'
	},
	contentTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('5%'),
		color: 'white'
	},
	contentCaption: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: 'white'
	},
	floatingCart: {
		position: 'absolute',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		top: 40,
		right: 20,
	},
	searchBox: {
		height: 30,
		marginRight: 20,
		marginTop: 10,
		backgroundColor: colors.lightgrey,
		borderColor: colors.lightgrey,
		borderRadius: 5
	},
	searchText: {
		fontFamily: fonts.regular,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	searchIcon: {
		fontSize: hp('2.5%'),
		color: colors.grey
	}
})
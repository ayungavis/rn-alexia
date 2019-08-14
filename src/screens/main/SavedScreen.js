import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import Header from 'library/header';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class SavedScreen extends Component {
	render() {
		return(
			<Container style={styles.container}>
				<StatusBar backgroundColor={'white'} barStyle="dark-content" translucent={true} />
				<View style={styles.top}>
					<Header navigation="" title={strings.wishlist.title} rightIcon="ellipsis-h" />
				</View>
				<View style={styles.middle}>
					<View style={styles.filterLayout}>
						<Text style={styles.filterText}>63 items found</Text>
						<TouchableOpacity>
							<FontAwesome5 name="sliders-h" size={15} color={colors.primary} /> 
						</TouchableOpacity>
					</View>
					<ScrollView showVerticalScrollIndicator={false}>
						<View style={styles.contentLayout}>
							<View style={styles.contentLeft}>
								{/*<Image style={styles.thumbnail} />*/}
								<View style={styles.thumbnail}></View>
							</View>
							<View style={styles.contentRight}>
								<View style={styles.contentText}>
									<Text style={styles.contentTitle}>Fold Knitted Sweater</Text>
									<Text style={styles.contentPrice}>$49.99</Text>
								</View>
								<View style={styles.contentButton}>
									<TouchableOpacity>
										<View style={styles.button} >
											<Text style={styles.buttonText}>Move to Bag</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={styles.line} opacity={0.5}></View>
					</ScrollView>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		flex: 1,
		marginTop: 20
	},
	middle: {
		flex: 9
	},
	filterLayout: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	filterText: {
		fontFamily: fonts.regular,
		fontSize: hp('2%'),
		color: colors.grey
	},
	contentLayout: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 15,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	contentLeft: {
		marginRight: 15
	},
	contentRight: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		height: 70,
		width: wp('60%')
	},
	thumbnail: {
		width: 70,
		height: 70,
		backgroundColor: 'grey',
		borderRadius: 5
	},
	contentText: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginRight: 20
	},
	contentTitle: {
		fontFamily: fonts.bold,
		fontSize: hp('2.5%'),
		color: colors.primary
	},
	contentPrice: {
		fontFamily: fonts.bold,
		fontSize: hp('2%'),
		color: colors.primary
	},
	contentButton: {
		justifyContent: 'flex-end',
		alignItems: 'flex-start'
	},
	button: {
		backgroundColor: 'white',
		borderColor: colors.blue,
		borderRadius: 50,
		borderWidth: 1.5,
		borderRadius: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: wp('23%'),
		height: hp('3.5%'),
	},
	buttonText: {
		fontFamily: fonts.semibold,
		fontSize: hp('2%'),
		color: colors.blue
	},
	line: {
		width: wp('90%'),
		height: hp('0.3%'),
		borderRadius: 100,
		backgroundColor: colors.grey,
		marginBottom: 15,
		alignSelf: 'center'
	}
})
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Text } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import fonts from 'res/fonts';
import strings from 'res/strings';
import colors from 'res/colors';
import images from 'res/images';

export default class Header extends Component {
	handleBack() {
		this.props.navigation.state.params.onGoBack()
		this.props.navigation.goBack()
	}

	render() {
		return(
			<View style={styles.header}>
				<View style={styles.headerLeft}>
					<TouchableOpacity onPress={() => this.handleBack()}>
						<FontAwesome5 name={this.props.leftIcon} size={15} color={colors.primary} />
					</TouchableOpacity>
				</View>
				<View style={styles.headerCenter}>
					<Text style={styles.title}>{this.props.title}</Text>
				</View>
				<View style={styles.headerRight}>
					<TouchableOpacity>
						<FontAwesome5 name={this.props.rightIcon} size={15} color={colors.primary} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	headerLeft: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: 20
	},
	headerCenter: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerRight: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: 20,
	},
	title: {
		fontFamily: fonts.bold,
		fontSize: hp('3%'),
		color: colors.primary
	}
})
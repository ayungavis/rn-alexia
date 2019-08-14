import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconBadge from 'react-native-icon-badge';
import axios from 'axios';

import fonts from 'res/fonts';
import colors from 'res/colors';

export default class FloatingCart extends Component {
	render() {
		return(
			<View>
			{this.props.length > 0 ? 
				<IconBadge
					MainElement={
						<FontAwesome5 name="shopping-bag" size={25} color="white" />	
					}
					BadgeElement={
						<Text style={styles.badgeText}>{this.props.length}</Text>	
					}
					IconBadgeStyle={styles.badge}
				/>
				:
				<FontAwesome5 name="shopping-bag" size={25} color="white" />
			}
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	badgeText: {
		fontFamily: fonts.regular,
		fontSize: hp('1.5%'),
		color: 'white'
	},
	badge: {
		position: 'absolute',
		top: -5,
		right: -5,
		minWidth: 15,
		height: 15,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.love
	}
})
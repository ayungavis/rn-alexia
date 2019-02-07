import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ShopScreen from './ShopScreen';
import ExploreScreen from './ExploreScreen';
import SavedScreen from './SavedScreen';
import ProfileScreen from './ProfileScreen';
import DetailScreen from './DetailScreen';
import CartScreen from './CartScreen';

import colors from 'res/colors';

const BottomNavigator = createMaterialBottomTabNavigator({
	Shop: { 
		screen: ShopScreen
	},
	Explore: { screen: ExploreScreen },
	Saved: { screen: SavedScreen },
	Profile: { screen: ProfileScreen }
}, {
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let IconComponent = Icon;
			let iconName;
			if (routeName === 'Shop') {
				iconName = `ios-flash`;
				// IconComponent = HomeIconWithBadge;
			}
			else if (routeName === 'Explore') {
				iconName = `ios-eye`;
			}
			else if (routeName === 'Saved') {
				iconName = `ios-bookmark`;
			}
			else if (routeName === 'Profile') {
				iconName = 'ios-contact';
			}
			return <IconComponent name={iconName} size={23} color={tintColor} />;
		}
	}),
	initialRouteName: 'Shop',
	activeColor: colors.primary,
	inactiveColor: colors.inactive,
	barStyle: { backgroundColor: 'white' }
})

const MainNavigator = createStackNavigator({
	Shop: {
		screen: BottomNavigator,
		navigationOptions: {
			header: null
		}
	},
	Detail: { screen: DetailScreen },
	Cart: { screen: CartScreen }
}, {
	headerMode: 'none'
})

export default createAppContainer(MainNavigator)
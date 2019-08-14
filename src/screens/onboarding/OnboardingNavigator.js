import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from '../main/MainNavigator';
import AuthNavigator from '../auth/AuthNavigator';

import WelcomeScreen from './WelcomeScreen';

const OnboardingNavigator = createStackNavigator({
	Welcome: { screen: WelcomeScreen },
	Shop: { screen: MainNavigator },
	Login: { screen: AuthNavigator }
}, {
	headerMode: 'none'
})

export default createAppContainer(OnboardingNavigator)
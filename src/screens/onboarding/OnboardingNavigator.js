import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from '../main/MainNavigator';

import WelcomeScreen from './WelcomeScreen';

const OnboardingNavigator = createStackNavigator({
	Welcome: { screen: WelcomeScreen },
	Shop: { screen: MainNavigator }
}, {
	headerMode: 'none'
})

export default createAppContainer(OnboardingNavigator)
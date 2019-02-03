import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from './WelcomeScreen';

const OnboardingNavigator = createStackNavigator({
	Welcome: { screen: WelcomeScreen },
}, {
	headerMode: 'none'
})

export default createAppContainer(OnboardingNavigator)
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthNavigator = createStackNavigator({
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen }
}, {
	headerMode: 'none'
})

export default createAppContainer(AuthNavigator)
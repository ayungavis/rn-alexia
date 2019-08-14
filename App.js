import React, {Component} from 'react';
import { Provider } from 'react-redux';

import OnboardingNavigator from './src/screens/onboarding/OnboardingNavigator';

import store from 'library/redux/store';

export default class App extends Component<Props> {
	render() {
		return (
			<Provider store={store}>
	  			<OnboardingNavigator />
	  		</Provider>
		);
  	}
}
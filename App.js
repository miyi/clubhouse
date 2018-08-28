import React, { Component } from 'react';
import { Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavigationStack from './src/navigation';
import { Font } from 'expo';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#0084ff',
		accent: '#f1c40f',
		background: '#f9f9f9',
		paper: 'white'
	}
};

export default class App extends Component {
	state = {
		fontLoaded: false,
	};
	
	async componentDidMount() {
		await Font.loadAsync({
			'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
			'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
			'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
			'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			this.state.fontLoaded
				? <PaperProvider theme={theme}>
					<NavigationStack />
				</PaperProvider>
				: <Text>Loading Fonts...</Text>
		);
	}
}
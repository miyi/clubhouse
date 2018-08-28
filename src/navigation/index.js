import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ChatScreen from '../screens/ChatScreen';
import SearchScreen from '../screens/SearchScreen';

import { BottomTabNavigation } from './BottomTabNavigation';
import SearchHeader from '../components/SearchHeader';

const SearchStack = createStackNavigator(
	{
		BottomTabNavigation: {
			screen: BottomTabNavigation,
			navigationOptions: {
				gesturesEnabled: false
			}
		},
		SearchScreen: {
			screen: SearchScreen,
			navigationOptions: { gesturesEnabled: false }
		}
	},
	{
		mode: 'modal',
		headerMode: 'none'
	}
);

const ModalStack = createStackNavigator(
	{
		SearchStack: {
			screen: SearchStack,
			navigationOptions: ({ navigation }) => ({
				gesturesEnabled: false,
				header: <SearchHeader navigation={navigation} />
			})
		}
	},
	{
		mode: 'modal'
	}
);

const MessengerApp = createStackNavigator({
	MainScreen: {
		screen: ModalStack,
		navigationOptions: {
			gesturesEnabled: false,
			header: null
		}
	},
	ChatScreen: {
		screen: ChatScreen,
		navigationOptions: { gesturesEnabled: false, header: null }
	}
});

export default MessengerApp;

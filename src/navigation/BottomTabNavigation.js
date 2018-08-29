import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { HomeTabNavigation } from './HomeTabNavigation';
import FreshScreen from '../screens/FreshScreen';
// import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';

import TabIcon from '../components/TabIcon';
import AppStyles from '../config/styles';

const HomeTabIcon = ({ tintColor }) => (
	<TabIcon name="home" tintColor={tintColor} type="material" />
);
const BellIcon = ({ tintColor }) => (
	<TabIcon name="bell" tintColor={tintColor} type="entypo" />
);
const MessageIcon = ({ tintColor }) => (
	<TabIcon name="message" tintColor={tintColor} type="material"/>
);



export const BottomTabNavigation = createBottomTabNavigator(
	{
		HomeScreen: {
			screen: HomeTabNavigation,
			navigationOptions: {
				header: null,
				tabBarIcon: HomeTabIcon
			}
		},

		FreshScreen: {
			screen: FreshScreen,
			navigationOptions: {
				header: null,
				tabBarIcon: BellIcon
			}
		},
		MessagesScreen: {
			screen: ChatScreen,
			navigationOptions: {
				tabBarIcon: MessageIcon
			} 
		},
	},
	{
		tabBarOptions: {
			showLabel: false,
			activeTintColor: '#CCCC00',
			inactiveTintColor: AppStyles.colors.inactiveGreyColor,
			pressColor: '#7f8c8d'
		}
	}
);

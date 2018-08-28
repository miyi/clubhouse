import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PeopleScreen from '../screens/PeopleScreen';
import MeScreen from '../screens/MeScreen';

import AppStyles from '../config/styles';

export const HomeTabNavigation = createMaterialTopTabNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: { header: null, title: 'Home' }
		},
		MeScreen: {
			screen: MeScreen,
			navigationOptions: { header: null, title: 'Me' }
		},
		PeopleScreen: {
			screen: PeopleScreen,
			navigationOptions: { header: null, title: 'People' }
		}
	},
	{
		tabBarPosition: 'top',
		tabBarOptions: {
			activeTintColor: AppStyles.colors.accentColor,
			inactiveTintColor: AppStyles.colors.inactiveGreyColor,
			pressColor: AppStyles.colors.lightGreyC0lor,
			labelStyle: {
				fontWeight: 'bold',
				fontSize: Platform.OS === 'ios' ? 11 : 12,
				fontFamily: AppStyles.fonts.FONT_MEDIUM
			},
			indicatorStyle: {
				backgroundColor: AppStyles.colors.accentColor
			},
			style: {
				backgroundColor: 'white'
			}
		}
	}
);

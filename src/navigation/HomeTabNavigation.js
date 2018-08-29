import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import ClubHomeScreen from '../screens/ClubHomeScreen';
import ClubMemberScreen from '../screens/ClubMemberScreen';
import ClubPrivateScreen from '../screens/ClubPrivateScreen';

import AppStyles from '../config/styles';

export const HomeTabNavigation = createMaterialTopTabNavigator(
	{
		ClubHomeScreen: {
			screen: ClubHomeScreen,
			navigationOptions: { header: null, title: 'club' }
		},
		ClubPrivateScreen: {
			screen: ClubPrivateScreen,
			navigationOptions: { header: null, title: 'private' }
		},
		ClubMemberScreen: {
			screen: ClubMemberScreen,
			navigationOptions: { header: null, title: 'crew' }
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

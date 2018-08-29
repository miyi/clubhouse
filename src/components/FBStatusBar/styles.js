import { StyleSheet, Platform } from 'react-native';
import AppStyles from '../../config/styles';

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 22;

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT
	},
	iOsStatusBar: {
		height: STATUSBAR_HEIGHT,
		backgroundColor: AppStyles.colors.accentColor
	},
	appBar: {
		backgroundColor: AppStyles.colors.accentColor,
		height: APPBAR_HEIGHT
	}
});

export default styles;

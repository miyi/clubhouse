import AppStyles from '../../config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: AppStyles.colors.lightWhite,
	},
	text: {
		margin: 24,
	},
	nameInput: { 
	  height: 48,
		margin: 24,
		paddingHorizontal: 24,
		borderColor: '#111111',
		borderWidth: 1,
	},
	buttonText: { 
		margin: 24
	},
});

export default styles;
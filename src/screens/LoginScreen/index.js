import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

export default class AnonymousLogin extends Component {
	state = { username: '' }
	onChangeText = username => this.setState({ username });
	onPress = () => {
		this.props.navigation.navigate('SearchScreen');
	};

	render() {
		const name = this.state.username? 'welcome ' + this.state.username: 'login';
		return (
			<View>
				<Text style={styles.text}>please enter your username</Text>
				<TextInput
					onChangeText={this.onChangeText}
					style={styles.nameInput}
					placeHolder="please enter your username"
					value={this.state.name}
					onPress={this.onPress}
				/>
				<TouchableOpacity onPress={this.onPress}>
					<Text style={styles.buttonText}>{name}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

AnonymousLogin.propTypes = {
	navigation: PropTypes.object
};
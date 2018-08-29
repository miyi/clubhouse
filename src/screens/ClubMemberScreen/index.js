import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PeopleList from '../../components/PeopleList';

export default class ClubMemberScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PeopleList />
			</View>
		);
	}
}

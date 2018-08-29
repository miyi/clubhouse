import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../fire/Fire';

class Chat extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: (navigation.state.params || {}).name || 'Chat!',
	});
	state = {
		messages: []
	}

	componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
	}
	componentWillUnmount() {
		Fire.shared.off();
	}

	get user() {
		return {
			name: this.props.navigation.state.params.name,
			_id: Fire.shared.uid,
		};	
	}

	render() {
		return(
			<GiftedChat
				messages={this.state.messages}
				user={this.user}
				onSend={Fire.shared.send}
			/>
		);
	}
}

export default Chat;
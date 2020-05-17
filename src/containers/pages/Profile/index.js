import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Day: 100
    };
  }

  render() {
    return (
      <View>
        <Text>{ this.state.Day }</Text>
      </View>
    );
  }
}

export default Profile;

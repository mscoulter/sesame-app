import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
var styles = require('../config/styles');

class LockDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { locked: false };
  }

  toggle(){
    this.setState({
      locked: !this.state.locked
    });
    log
  }

  render() {
    return (
      <View style={styles.lockContainer}>
        <TouchableOpacity onPress={this.toggle}>
          <View style={styles.lockImageContainer}>
            <Image
              source={require('../images/WhiteLock.png')}
              style={styles.lockImage}
            />
          </View>
          <View style={styles.lockDetails}>
            <Text>Home</Text>
            <Text>Front Door</Text>
            <Text>Unlocked</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = LockDetails;
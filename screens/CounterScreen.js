import React, { Component } from 'react';
import _ from 'lodash';

import { View, Text, Image, StyleSheet, Animated, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Four from '../components/Four';
import Five from '../components/Five';
import Six from '../components/Six';
import Seven from '../components/Seven';
import Eight from '../components/Eight';
import Nine from '../components/Nine';
import Ten from '../components/Ten';
import Eleven from '../components/Eleven';
import Twelve from '../components/Twelve';
import Thirteen from '../components/Thirteen';

const BLINK_TIME = 150;

export default class CounterScreen extends Component {
  constructor(props) {
    super(props);

    let stateReceived = props.navigation.state.params;
    this.state = {
      remaining: stateReceived.totalCups,
      eyes: true,
    };
    this.updateState = this.updateState.bind(this);
    this.blink = this.blink.bind(this);

    setTimeout(this.blink, 900);
  }

  onComponentWillUnmount() {
    clearTimeout(this._blinkTimer);
  }

  blink = () => {
    this.setState({ eyes: false });
    setTimeout(() => this.setState({ eyes: true }), BLINK_TIME);
    this._blinkTimer = setTimeout(this.blink, _.random(900, 3000));
  };

  updateState() {
    if (this.state.remaining > 0) {
      this.setState({
        remaining: this.state.remaining - 1,
      });
    } else {
      Alert.alert('You have had enough water for the day! Come back tomorrow!');
    }
  }
  render() {
    // console.log('THIS.STATE ', this.state);

    const { eyes } = this.state;
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => console.log('logged out')}>
          <View style={styles.logOutContainer}>
            <Text style={styles.logOutText}>Log out</Text>
          </View>
        </TouchableOpacity> */}

        {this.state.remaining > 1 ? (
          <Text style={styles.introText}>
            Keep track below to help me grow!{'\n'}
            <Text style={styles.funText}>{this.state.remaining}</Text>
            {'\n'} more cups to go!
          </Text>
        ) : this.state.remaining === 1 ? (
          <Text style={styles.introText}>
            Keep track below to help me grow!{'\n'}
            <Text style={styles.funText}>{this.state.remaining} </Text>
            {'\n'}more cup to go!
          </Text>
        ) : (
          <Text style={styles.introText}>
            Thanks for hydrating me! {'\n'}
            Time to dance the night away! {'\n'}
            {'\n'}
            See you tomorrow morning!{'\n'}
          </Text>
        )}

        <TouchableOpacity onPress={this.updateState}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>+</Text>
          </View>
        </TouchableOpacity>

        {this.state.remaining === 0 ? (
          <Thirteen eyes={eyes ? 'open' : 'closed'} />
        ) : (
          <One eyes={eyes ? 'open' : 'closed'} />
        )}
      </View>
    );
  }
}

CounterScreen.navigationOptions = {
  title: 'Tracker',
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  logOutContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 50,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 100,
    borderRadius: 5,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  logOutText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    marginLeft: 80,
    transform: [{ rotate: '30deg' }],
  },
  buttonContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  introText: {
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#ff4760',
    textAlign: 'center',
  },
  funText: {
    fontSize: 36,
    color: '#ff4760',
    fontWeight: '700',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeImage: {
    width: 5,
    height: 5,
    resizeMode: 'contain',
  },
});

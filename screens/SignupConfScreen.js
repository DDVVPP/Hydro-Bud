import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Button,
  Platform,
  StyleSheet,
  InputGroup,
  InputAccessoryView,
  Icon,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CounterScreen from './CounterScreen';

export default class SignupConfScreen extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('this.props ', this.props.navigation.state.params);
    const prevState = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.introText}>
          Thanks for signing up {prevState.firstName}!
        </Text>
        <View>
          <Image
            style={{ marginTop: 20, marginLeft: 100 }}
            source={require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/Max-7.png')}
          />
        </View>

        <Text style={styles.introText}>
          {'\n'}You need {'\n'}
          <Text style={styles.funText}>{prevState.totalCups}</Text>
          {'\n'} cups of water a day to stay well hydrated!
        </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Counter', prevState)}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

SignupConfScreen.navigationOptions = {
  title: 'Sign Up Confirmation',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  introText: {
    // marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#ff4760',
    textAlign: 'center',
  },
  funText: {
    fontSize: 30,
    color: '#ed0581',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 40,
    justifyContent: 'center',
  },
});

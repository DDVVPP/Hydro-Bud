import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Platform,
  Image,
  StyleSheet,
  Animated,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';

export default class CounterScreen extends Component {
  constructor(props) {
    super(props);

    let stateReceived = props.navigation.state.params;
    this.state = {
      remaining: stateReceived.totalCups,
      fadeValue: new Animated.Value(0),
      // time: new Date(),
    };
    this.updateState = this.updateState.bind(this);
  }
  // handleViewRef = ref => (this.view = ref);
  // bounce = () =>
  //   this.view
  //     .bounce(800)
  //     .then(endState =>
  //       console.log(endState.finished ? 'bounce finished' : 'bounce cancelled')
  //     );

  // componentWillMount() {
  //   setInterval(
  //     function() {
  //       // if (this.time.getHours() === 12) {
  //       //   this.setState({
  //       //     remaining: stateReceived.totalCups,
  //       //   });
  //       //   console.log(this.state);
  //       // }
  //       this.setState({
  //         time: new Date(),
  //       });
  //     }.bind(this),
  //     300000
  //   );
  // }

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

        <View>
          {this.state.remaining === 0 ? (
            <Image
              style={{
                marginTop: 20,
                marginLeft: 100,
              }}
              source={require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/HydroBud-01.png')}
            />
          ) : (
            <Image
              style={{
                marginTop: 20,
                marginLeft: 100,
              }}
              source={require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/HydroBud-01.png')}
            />
          )}
        </View>
      </View>
    );
  }
}

CounterScreen.navigationOptions = {
  title: 'Tracker',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
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
    fontSize: 40,
    fontWeight: 'bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
  introText: {
    marginTop: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 5,
    height: 5,
    resizeMode: 'contain',
  },
});

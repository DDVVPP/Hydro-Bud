import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';
import { objectExpression } from '@babel/types';

export default class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      height: 0,
      weight: 0,
      zipcode: 0,
      age: 0,
      totalCups: 0,
    };
    this.createUser = this.createUser.bind(this);
    this.calculateCups = this.calculateCups.bind(this);
  }

  calculateCups() {
    let firstCalc = this.state.weight / 2.2;
    let calcInCups = 0;
    if (this.state.age < 30 && this.state.age > 0) {
      let secondCalc = firstCalc * 40;
      let calcInOunces = secondCalc / 28.3;
      calcInCups = calcInOunces / 8;
    } else if (this.state.age <= 55) {
      let secondCalc = firstCalc * 35;
      let calcInOunces = secondCalc / 28.3;
      calcInCups = calcInOunces / 8;
    } else if (this.state.age > 55) {
      let secondCalc = firstCalc * 30;
      let calcInOunces = secondCalc / 28.3;
      calcInCups = calcInOunces / 8;
    }
    return Math.ceil(calcInCups).toFixed(0);
  }

  // cannotBeEmpty() {
  //   for (let key in this.state) {
  //     if (this.state.hasOwnProperty(key) && key !== '') {
  //       Alert.alert(this.state[key], 'cannot be empty');
  //     }
  //   }
  // }

  async createUser() {
    try {
      this.setState({
        totalCups: this.calculateCups(),
      });
      await FirebaseWrapper.GetInstance().CreateNewDocument('users', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        height: Number(this.state.height),
        weight: Number(this.state.weight),
        age: Number(this.state.age),
        zipcode: Number(this.state.zipcode),
        totalCups: Number(this.calculateCups()),
      });

      // this.cannotBeEmpty();
      if (
        this.state.firstName != '' &&
        this.state.lastName != '' &&
        this.state.email != '' &&
        this.state.password != '' &&
        this.state.height != 0 &&
        this.state.weight != 0 &&
        this.state.zipcode != 0 &&
        this.state.age != 0
      ) {
        this.props.navigation.navigate('Confirmation', this.state);
      } else {
        Alert.alert('Oops!', 'Please fill in empty fields to proceed');
      }
    } catch (error) {
      console.log('createUser not working ', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inputTitle}>First Name:</Text>
        <TextInput
          onChangeText={text => this.setState({ firstName: text })}
          value={this.firstName}
          style={styles.inputFields}
          placeholder="Enter first name"
        />
        <Text style={styles.inputTitle}>Last Name: </Text>
        <TextInput
          onChangeText={text => this.setState({ lastName: text })}
          value={this.lastName}
          style={styles.inputFields}
          placeholder="Enter last name"
        />
        <Text style={styles.inputTitle}>Email: </Text>
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          value={this.email}
          style={styles.inputFields}
          placeholder="Enter email"
        />
        <Text style={styles.inputTitle}>Password: </Text>
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
          value={this.password}
          style={styles.inputFields}
          placeholder="Enter password"
        />
        <Text style={styles.inputTitle}>Height: </Text>
        <TextInput
          onChangeText={text => this.setState({ height: text })}
          value={this.height}
          keyboardType="numeric"
          style={styles.inputFields}
          placeholder="Enter height in inches"
        />
        <Text style={styles.inputTitle}>Weight: </Text>
        <TextInput
          onChangeText={text => this.setState({ weight: text })}
          value={this.weight}
          keyboardType="numeric"
          style={styles.inputFields}
          placeholder="Enter weight in lbs"
        />
        <Text style={styles.inputTitle}>Age: </Text>
        <TextInput
          onChangeText={text => this.setState({ age: text })}
          value={this.age}
          keyboardType="numeric"
          style={styles.inputFields}
          placeholder="Enter age"
        />
        <Text style={styles.inputTitle}>Zip Code: </Text>
        <TextInput
          onChangeText={text => this.setState({ zipcode: text })}
          value={this.age}
          keyboardType="numeric"
          style={styles.inputFields}
          placeholder="Enter zip code"
        />

        <TouchableOpacity onPress={this.createUser}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

SignupScreen.navigationOptions = {
  title: 'Sign Up',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputTitle: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#ff4760',
  },
  inputFields: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    backgroundColor: '#fff0f2',
    borderRadius: 10,
    borderRadius: 7,
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});

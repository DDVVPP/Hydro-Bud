import React, { Component } from 'react';

import {
  View,
  Text,
  Alert,
  TextInput,
  ScrollView,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { FirebaseWrapper } from '../firebase/firebase';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
  }

  async componentDidMount() {
    await FirebaseWrapper.GetInstance().getUser('users');
    console.log(
      'FROM FIREBASE ',
      await FirebaseWrapper.GetInstance().getUser('users')
    );
  }

  onLogin() {
    if (this.state.email != '' && this.state.password != '') {
      this.props.navigation.navigate('Counter', this.state);
    } else {
      Alert.alert('Oops!', 'Please fill in empty fields to proceed');
    }
    // try {
    //   let value = await FirebaseWrapper.GetInstance().getUser('users');
    //   console.log('VALUE ', value);
    //   this.state.email !== ''
    //     ? (await FirebaseWrapper.GetInstance().getUser('users'),
    //       this.props.navigation.navigate('Counter', value))
    //     : console.log('loading');
    // } catch (error) {
    //   console.log('onLogin not working ', error);
    // }
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 20, marginTop: 205 }}>
        <View style={styles.container}>
          <View style={{ width: 120, height: 100, color: 'powderblue' }}>
            <Text style={styles.inputTitle}>Email</Text>
          </View>
          <View style={{ width: 240, height: 100, color: 'powderblue' }}>
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
          </View>
        </View>
        <View style={styles.container}>
          <View style={{ width: 120, height: 100, color: 'powderblue' }}>
            <Text style={styles.inputTitle}>Password</Text>
          </View>
          <View style={{ width: 240, height: 100, color: 'powderblue' }}>
            <TextInput
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={true}
              value={this.password}
              style={styles.inputFields}
              placeholder="Enter password"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this.onLogin}>
            <View style={styles.buttonContainer}>
              <Text style={styles.button}> Login </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: -30,
  },
  inputTitle: {
    marginTop: 10,
    padding: 8,
    fontSize: 18,
    color: '#545454',
  },
  inputFields: {
    fontSize: 18,
    backgroundColor: 'rgba(255, 69, 102, 0.05)',
    padding: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 69, 102, 0.5)',
  },
  buttonContainer: {
    backgroundColor: '#4cd0f5',
    borderColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    marginTop: -10,
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});

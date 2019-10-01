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
      <View style={styles.container}>
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

        <TouchableOpacity onPress={this.onLogin}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}> Login </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Login',
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});

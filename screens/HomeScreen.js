import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introText}>Hydro Bud</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
          style={{ fontSize: 20 }}
        ></Button>
        <Button
          onPress={() => this.props.navigation.navigate('Signup')}
          title="Sign Up"
          style={{ fontSize: 20 }}
        ></Button>
        <View>
          <Image
            styles={styles.welcomeImage}
            source={require('/Users/Darshin/Documents/CODING/Grace-Hopper-Program/SENIOR PHASE/Stackathon/Hydro-Bud/assets/images/HydraBudHome.png')}
          />
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ff4760',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 20,
  },
  introText: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    color: '#ff4760',
  },
  welcomeImage: {
    width: 5,
    height: 5,
    resizeMode: 'contain',
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

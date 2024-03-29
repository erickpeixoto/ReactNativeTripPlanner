

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  HomeScreen from './src/screens/HomeScreen' 


export default class App extends Component{
  render() {
    return (
            <HomeScreen/>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

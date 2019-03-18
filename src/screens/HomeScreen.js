import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/background.png')}
                       imageStyle={{resizeMode: 'stretch'}}  
                       style={{
                               flex: 1,
                               flexDirection: 'column',
                               alignItems: 'stretch',
                               justifyContent: 'space-between'
                           }}>
                           <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                           
                                <Image source={require('../../assets/logo-tripplanner.png')} />
                           </View>
                           <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingBottom: 32,
                                }}>
                                <Image source={require('../../assets/logo-devpleno.png')} />
                           </View>
                           <TouchableWithoutFeedback>
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        paddingBottom: 30,
                                        padding: 18
                                    }}>
                                    <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 14,
                                    }}
                                    > COMEÇAR </Text>
                                </View>
                           </TouchableWithoutFeedback>
                           
      </ImageBackground>
    )
  }
}




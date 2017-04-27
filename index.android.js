// @flow
'use strict'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
  StatusBar,
  Text,
} from 'react-native'
import Meteor, {
  createContainer,
  MeteorListView,
 } from 'react-native-meteor'
 import ModalBox from './ModalBox';

Meteor.connect('ws://durbintest.pro/websocket')



export default class AwesomeProject extends Component {

  renderItem(Do){
    return(
      <Text>{Do}</Text>
    )
  }



  render() {

    const { doList, } = this.props

    return (
        <View>
                <ModalBox/>
        </View>

        );

        }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
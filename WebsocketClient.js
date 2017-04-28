/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
        AppRegistry,
        StyleSheet,
        View,
} from 'react-native';
import { Container, Text, Content,Button} from 'native-base';
import Meteor, {createContainer} from 'react-native-meteor';

const SERVER_URL = 'ws://durbintest.pro/websocket';


class WebsocketClient extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        text: true,
                        subscribe: false,
                };

        }

        componentWillMount() {
            Meteor.connect(SERVER_URL);
          }

        pressed(){
                this.setState({
                        text: !this.state.text,

                });
        }

        render() {
        console.log('bla');
        //console.log(this.props);
        //Meteor.subscribe('fetch.news');
        //console.log(Meteor.collection('fetch.news'));

        let vv =
                <Text>
                      Item Count: {this.props.count}
                </Text>

        return (
                <Container>
                        <Content>
                                <Button onPress={this.pressed.bind(this)}>
                                        <Text>HELLO</Text>
                                </Button>
                                {vv}

                        </Content>
                </Container>

        );
        }
}

export default createContainer(() => {
  Meteor.subscribe('fetch.news');
  console.log('kjh');
  return {
        count: Meteor.collection('fetch.news').find().length,
  };
}, WebsocketClient);



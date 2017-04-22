/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Container,Header,Left,Right,Body,Icon,Title, Button, Text, Content} from 'native-base';
import NewsDiv from './NewsDiv';
import Icon2 from 'react-native-vector-icons/Entypo';



export default class AwesomeProject extends Component {
  render() {
    return (
        <Container style={{flex:1}}>
            <Header style={{backgroundColor: "#5a2fd1"}}>
                <Left style={{marginLeft: "3%", marginRight: "13%"}}>
                    <Button transparent>
                        <Icon2 name='menu' size={28}  color="#fff"/>
                    </Button>
                </Left>
                <Body style={{flex:1, flexDirection: "row", justifyContent: "center",alignItems: 'center'}}>
                    <Title style={{flex:1, flexDirection: "row", justifyContent: "center",alignItems: 'center', fontSize: 30}}>NEWS</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon2 name="dots-three-vertical" size={20} color="#fff" />
                    </Button>
                </Right>
            </Header>

            <Content style={{margin: "3%"}}>
                <NewsDiv textData="Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."/>
                <NewsDiv textData="Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."/>
                <NewsDiv textData="Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."/>
            </Content>



        </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

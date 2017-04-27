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
import SingleNewsDiv from './SingleNewsDiv';
import Icon2 from 'react-native-vector-icons/Entypo';



export default class AwesomeProject extends Component {

        constructor(props) {
                super(props);
                this.state = {
                    scrollable: true,
                    headline: "",
                    time: "",
                    attachmentTotal: "",
                    abstract: "",
                    commentsTotal: "",
                    marginTopVal: "",
                    hasScrolled: false,
                };

        }

        scrollHandler(headline,time,attachmentTotal,abstract,commentsTotal) {
                //e.preventDefault();
                console.log("I HAVE BEEN CLICKED");
                //console.log(propVal);
                this.setState({
                        scrollable: !this.state.scrollable,
                        headline: headline,
                        time: time,
                        attachmentTotal: attachmentTotal,
                        abstract: abstract,
                        commentsTotal: commentsTotal,

                })
        }

        handleScroll(event){
                //marginTopVal:
                console.log("SCROLL IS HAPPENING!!!!!!!!");
                console.log(event.nativeEvent.contentOffset.y);
                if(event.nativeEvent.contentOffset.y!=0){
                        this.setState({
                                hasScrolled: true
                        })
                }
                else{
                        this.setState({
                                hasScrolled: false
                        })
                }


        }


        render() {

//    console.log("I am i");

//    var ws = new WebSocket('ws://durbintest.pro/websocket');
//    var data = "";
//    ws.onopen = () => {
//      // connection opened
//        console.log("*******************FROM OPEN******************");
//      ws.send('fetch.news'); // send a message
//
//
//    };
//    ws.onmessage = (e) => {
//      // a message was received
//      console.log("*******************FROM MSG******************");
//      console.log(e.data);
//    };
//
//    ws.onerror = (e) => {
//      // an error occurred
//      console.log("*******************FROM ERROR******************");
//      console.log(e.message);
//    };
//
//    ws.onclose = (e) => {
//      // connection closed
//      console.log("*******************FROM CLOSE******************");
//      console.log(e.code, e.reason);
//    };

//        <SingleNewsDiv headline="Latest News 2" time="5 Hours" attachmentTotal="4" article={textData} commentTotal="55"/>
//    <NewsDiv textData="Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."/>
//                    <NewsDiv textData="Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."/>

        let textData = "Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."


        //CREATE HEADER
        let header =
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



        //CREATE NEWS FEED VAR
        let newsFeed =
               <Content style={{flex:1,flexDirection:'column'}} scrollEnabled={ this.state.scrollable} onScroll={this.handleScroll.bind(this)}>
                       <NewsDiv headline="Latest News 1" time="4 Hours" attachmentTotal="7" abstract={textData} commentsTotal="10" scrollHandler = {this.scrollHandler.bind(this)}/>
                       <NewsDiv headline="Latest News 2" time="5 Hours" attachmentTotal="8" abstract={textData} commentsTotal="11" scrollHandler = {this.scrollHandler.bind(this)}/>
               </Content>

        let singleNewsPage =
               <Content style={{flex:1,flexDirection:'column'}} scrollEnabled={ false }>
                       <SingleNewsDiv hasScrolled={this.state.hasScrolled} headline={this.state.headline} time={this.state.time} attachmentTotal={this.state.attachmentTotal} article={this.state.abstract} commentsTotal={this.state.commentsTotal}/>
               </Content>

         let bigBoss;
         if(this.state.scrollable==true){
                 bigBoss = newsFeed;
         }
         else{
                console.log("HAS SCROLLED: "+this.state.hasScrolled);
                 bigBoss = singleNewsPage;
         }
         //<SingleNewsDiv headline="Latest News 1" time="4 Hours" attachmentTotal="7" article={textData} commentsTotal="10" scrollHandler = {this.scrollHandler.bind(this)}/>


        return (
                <Container style={{flex:1}}>

                        {header}
                        {bigBoss}



                </Container>

                );
        }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

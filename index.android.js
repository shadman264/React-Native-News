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
  BackAndroid,
} from 'react-native';
import { Container,Header,Left,Right,Body,Icon,Title, Button, Text, Content} from 'native-base';
import NewsDiv from './NewsDiv';
import SingleNewsDiv from './SingleNewsDiv';
import Icon2 from 'react-native-vector-icons/Entypo';

import moment from 'moment'

import WebsocketClient from './WebsocketClient';



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
                    newsDivRemoteData: null,
                };
                //this.scrollHandler = this.scrollHandler.bind(this);

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

        navigate(){
                this.setState({
                        scrollable: true
                })
        }

        setRemoteData(data){
                console.log("entered in set_remote_data");
                this.setState({
                        newsDivRemoteData: data
                })
                console.log("DATA reached");


        }


        render() {
                let remoteNewsDivs;
                if(this.state.newsDivRemoteData!=null){

                        let scrollHandlerVar  = this.scrollHandler.bind(this);
                        //console.log(scrollHandlerVar);
                        remoteNewsDivs =
                                this.state.newsDivRemoteData.map(function (obj) {
                                        console.log(obj);
                                        let time = moment(obj.createdAt).format('ll');
                                        return (
                                                <NewsDiv key={obj._id} headline={obj.title} time={time} attachmentTotal="7" abstract={obj.description} commentsTotal="10" scrollHandler={scrollHandlerVar}/>

                                        )
                                });
                }

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
                       {remoteNewsDivs}
               </Content>

        let singleNewsPage =
               <Content style={{flex:1,flexDirection:'column'}} scrollEnabled={ false }>
                       <SingleNewsDiv navigate={this.navigate.bind(this)} hasScrolled={this.state.hasScrolled} headline={this.state.headline} time={this.state.time} attachmentTotal={this.state.attachmentTotal} article={this.state.abstract} commentsTotal={this.state.commentsTotal}/>
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
                        <WebsocketClient setRemoteData={this.setRemoteData.bind(this)}/>
                        {bigBoss}
                </Container>

        );
        }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

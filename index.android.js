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
                    clickedNews : false,
                    clickedId: null,
                    remoteClick: false,
                    remoteClick2: false,
                    callWebsocket: true,

                };
                //this.scrollHandler = this.scrollHandler.bind(this);

        }





        scrollHandler(clickedId, headline,time,attachmentTotal,abstract,commentsTotal) {
                //e.preventDefault();
                console.log("I HAVE BEEN CLICKED: "+ clickedId);
                //console.log(propVal);
                this.setState({
                        scrollable: !this.state.scrollable,
                        headline: headline,
                        time: time,
                        attachmentTotal: attachmentTotal,
                        abstract: abstract,
                        commentsTotal: commentsTotal,
                        clickedNews: true,
                        clickedId: clickedId,
                        newsDivRemoteData: null,
                        remoteClick: true,
                        remoteClick2: false,
                        callWebsocket: true,

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
                    scrollable: true,
                    headline: "",
                    time: "",
                    attachmentTotal: "",
                    abstract: "",
                    commentsTotal: "",
                    marginTopVal: "",
                    hasScrolled: false,
                    newsDivRemoteData: null,
                    clickedNews : false,
                    clickedId: null,
                    remoteClick: false,
                    remoteClick2: false,
                    callWebsocket: true,
                })
        }

        setRemoteData(data){
                console.log("entered in set_remote_data");
                this.setState({
                        newsDivRemoteData: data
                })
                console.log("DATA reached : ");
                console.log(data);


        }


        render() {
                let remoteNewsDivs;
                let singleNewsPage;
                if(this.state.newsDivRemoteData!=null && this.state.clickedNews==false){

                        let scrollHandlerVar  = this.scrollHandler.bind(this);
                        //console.log(scrollHandlerVar);
                        remoteNewsDivs =
                                this.state.newsDivRemoteData.map(function (obj) {
                                        console.log(obj);
                                        let time = moment(obj.createdAt).format('lll');
                                        return (
                                                <NewsDiv key={obj._id} id={obj._id} headline={obj.title} time={time} attachmentTotal="7" abstract={obj.description} commentsTotal="10" scrollHandler={scrollHandlerVar}/>

                                        )
                                });
                }
                else if(this.state.newsDivRemoteData!=null && this.state.clickedNews==true){
                        console.log("SINGLE NEWS METHOD FIRING!!!"+ this.state.clickedId);
                        let obj = this.state.newsDivRemoteData;
                        let navFunc = this.navigate.bind(this);
                        let time = moment(obj.createdAt).format('lll');
                        singleNewsPage =
                                <Content style={{flex:1,flexDirection:'column'}} scrollEnabled={ false }>
                                       <SingleNewsDiv navigate={navFunc} hasScrolled={this.state.hasScrolled} headline={obj.title} time={time} attachmentTotal="7" article={obj.description} commentsTotal="10"/>
                               </Content>
                }




//        let textData = "Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."


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
         let bigBoss;
         if(this.state.scrollable==true){
                 bigBoss = newsFeed;
         }
         else{
                console.log("HAS SCROLLED: "+this.state.hasScrolled);
                 bigBoss = singleNewsPage;
         }


        let singleNewsCall;
        if(this.state.callWebsocket==true && this.state.clickedNews==true){
                singleNewsCall =
                        <WebsocketClient setRemoteData={this.setRemoteData.bind(this)} type="single" clickedId={this.state.clickedId}/>
                //console.log("AMI EKHANE DHUKSI");
                this.state.callWebsocket =false;

        }
        else if(this.state.callWebsocket==true && this.state.clickedNews==false){

                singleNewsCall =
                        <WebsocketClient setRemoteData={this.setRemoteData.bind(this)} type="collection" clickedId={this.state.clickedId}/>
                this.state.callWebsocket =false;
        }




         //<SingleNewsDiv headline="Latest News 1" time="4 Hours" attachmentTotal="7" article={textData} commentsTotal="10" scrollHandler = {this.scrollHandler.bind(this)}/>


        return (
                <Container style={{flex:1}}>
                        {header}
                        {singleNewsCall}
                        {bigBoss}
                </Container>

        );
        }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

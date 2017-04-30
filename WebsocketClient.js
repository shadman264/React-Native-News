import React, { Component } from 'react';
import { StyleSheet, View, BackAndroid} from 'react-native';
import { Container,Header,Left,Right,Body,Icon,Title,Button, Text, Content} from 'native-base';

import NewsDiv from './NewsDiv';
import SingleNewsDiv from './SingleNewsDiv';
import Icon2 from 'react-native-vector-icons/Entypo';

import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

Meteor.connect('ws://durbintest.pro/websocket');//do this only once

class WebsocketClient extends Component {
        constructor(props) {
                super(props);
                this.state = {
                    called: false,
                };

        }

  render() {

        const { settings, todosReady, changed } = this.props;
        if(todosReady==true && this.state.called==false){
                console.log("TRUE FROM WEB");
                this.props.setRemoteData(settings);
                this.state.called = true;
        }

//        let remoteData =
//                settings.map(function (obj) {
//                        return (
//
//                       <NewsDiv headline="Latest News 1" time="4 Hours" attachmentTotal="7" abstract="adsadasdas" commentsTotal="10"/>
//
//                        )
//                });
        //console.log(settings);
        //console.log(todosReady);
        //console.log("Hi ends: ");
        //console.log(Meteor.getData());
        //console.log(Meteor.collection('fetch.news').get('hYhHcDXNWhwWQSfab'));

        return(
                <View>

                        {!todosReady && <Text>Not ready</Text>}



                </View>
        )
        }
}

export default createContainer(params=>{
        const handle = Meteor.subscribe('fetch.news');
        Meteor.subscribe('fetch.news');

        return {
                todosReady: handle.ready(),
                settings: Meteor.collection('News').find(),
        };
}, WebsocketClient)
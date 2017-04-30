import React, { Component } from 'react';
import { View} from 'react-native';
import { Text} from 'native-base';


import Spinner from 'react-native-loading-spinner-overlay';

import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

Meteor.connect('ws://durbintest.pro/websocket');//do this only once

class WebsocketClient extends Component {
        constructor(props) {
                super(props);
                this.state = {
                    //called: this.props.clicked,
                    //called2: this.props.clicked2,
                };

        }



  render() {


        const { settings, todosReady, changed } = this.props;
        console.log("HOW ARE YOU!!!!");
        //console.log(this.state.called);
        if(todosReady==true && this.props.type=="collection"){
                console.log("TRUE FROM WEB");
                this.props.setRemoteData(settings);
                //this.state.called = true;
        }
        else if(todosReady==true && this.props.type=="single"){
                //this.state.called2 = true;
                console.log("SINGLE NEWS COLLECTING FOR "+ this.props.clickedId);
                var dataSetterFunc = this.props.setRemoteData;
                var sth=Meteor.call('single.news', this.props.clickedId, function(err, result){
                        //console.log('news is : ');
                        //console.log(result);
                        //this.props.setRemoteData(result);
                        dataSetterFunc(result);
                });


        }



        return(
                <View>

                        {!todosReady && <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#000'}} />}

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
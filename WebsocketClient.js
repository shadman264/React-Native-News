import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'native-base';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

Meteor.connect('ws://durbintest.pro/websocket');//do this only once

class WebsocketClient extends Component {
        constructor(props) {
                        super(props);
                        this.state = {
                            clicked: false,



                        };
                }
  renderItem(todo) {
    return (
      <Text>{todo.title}</Text>
    );
  }
  render() {
    const { settings, todosReady } = this.props;
    console.log("HI starts");
    settings.map(function (obj) {
        console.log(obj.title);
    });
    let bob =
        settings.map(function (obj) {
               return (
                               <Text key={obj._id}>
                                   {obj.title}
                               </Text>

               )
           });
    console.log(settings);
    console.log(todosReady);
    console.log("Hi ends: ");
    //console.log(Meteor.getData());
    //console.log(Meteor.collection('fetch.news').get('hYhHcDXNWhwWQSfab'));

    return(
      <View>
        <Text>bla</Text>
          {!todosReady && <Text>Not ready</Text>}

                {bob}

          <Button>
                <Text>HELLO</Text>
          </Button>
      </View>
    )
  }
}

export default createContainer(params=>{
  const handle = Meteor.subscribe('fetch.news');
  Meteor.subscribe('fetch.news');

  return {
    todosReady: handle.ready(),
    settings: Meteor.collection('News').find()
  };
}, WebsocketClient)
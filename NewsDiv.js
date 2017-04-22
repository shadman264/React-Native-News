

import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Thumbnail,Left } from 'native-base';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';

export default class NewsDivs extends Component {
  render() {
      var s = this.props.textData.substring(0, 480);
      if(this.props.textData.length>480)
        s = s.concat("...");
      return (
            <Content>
                <Card>
                    <CardItem header>
                        <Left>
                            <Thumbnail square source={require('./img//newsThumbnail3.png')} />
                            <Body>
                                <Text style={{fontWeight: "bold", fontSize: 30}}>Latest News 1</Text>
                                <View style={{flex: 1, flexDirection: "row"}}>
                                    <View style={{flex: 1, flexDirection: "row"}}>
                                        <Icon1 name="clock" size={18} style={{color: "black", top: ".1%"}}/>
                                        <Text note> 2 hours ago</Text>
                                    </View>

                                    <View style={{flex: 1, flexDirection: "row"}}>
                                        <Icon2 name="attachment" size={16} style={{color: "black", top: ".1%"}}/>
                                        <Text note> 2 Attachment</Text>
                                    </View>
                                </View>


                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem >
                        <Text style={{paddingLeft: "3%", paddingBottom: "6%", paddingRight: "3%" }}>
                            {this.props.textData}
                        </Text>
                    </CardItem>

                    <CardItem header style={{backgroundColor: "#e6e4e2"}}>
                        <View style={{flex: 1, flexDirection: "row", paddingLeft: "3%"}}>
                            <Icon3 name="comments" size={28} style={{color: "grey"}}/>
                            <Text note>  53 Comments</Text>
                        </View>
                    </CardItem>
               </Card>
            </Content>
      );
  }


}


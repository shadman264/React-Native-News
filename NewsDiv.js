

import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Thumbnail,Left } from 'native-base';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';

export default class NewsDivs extends Component {
        render() {
                var s = this.props.abstract.substring(0, 480);
                console.log("LENGTH IS : "+ s.length);
                if(this.props.abstract.length>480)
                        s = s.concat("...");

                //CREATE HEADLINE
                let headline =
                        <CardItem header>
                                <Left>
                                        <Thumbnail square source={require('./img//newsThumbnail3.png')} />
                                        <Body>
                                                <Text style={{fontWeight: "bold", fontSize: 30}}>{this.props.headline}</Text>
                                                <View style={{flex: 1, flexDirection: "row"}}>
                                                        <View style={{flex: 1, flexDirection: "row"}}>
                                                                <Icon1 name="clock" size={18} style={{color: "black", top: ".1%"}}/>
                                                                <Text note> {this.props.time} ago</Text>
                                                        </View>

                                                        <View style={{flex: 1, flexDirection: "row"}}>
                                                                <Icon2 name="attachment" size={16} style={{color: "black", top: ".1%"}}/>
                                                                <Text note> {this.props.attachmentTotal} Attachment</Text>
                                                        </View>
                                                </View>


                                        </Body>
                                </Left>
                        </CardItem>

                //CREATE MIDDLE ABSTRACT PART
                let abstract =
                        <CardItem >
                                <Text style={{paddingLeft: "3%", paddingBottom: "6%", paddingRight: "3%" }}>
                                    {s}
                                </Text>
                        </CardItem>


                //CREATE FOOTER COMMENT PART
                let commentBox =
                        <CardItem header style={{backgroundColor: "#e6e4e2"}}>
                                <View style={{flex: 1, flexDirection: "row", paddingLeft: "3%"}}>
                                    <Icon3 name="comments" size={28} style={{color: "grey"}}/>
                                    <Text note>  {this.props.commentsTotal} Comments</Text>
                                </View>
                        </CardItem>


                return (
                        <Content style={{margin: "3%"}}>
                                <Card>

                                        {headline}
                                        {abstract}
                                        {commentBox}

                                </Card>
                        </Content>
                );
        }


}




import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Thumbnail,Left } from 'native-base';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';
import SingleNewsDiv from './SingleNewsDiv';

export default class NewsDivs extends Component {
        constructor(props) {
                super(props);
                this.state = {
                    clicked: false,
                    margin: "3%",


                };
        }

        pressed(){
                console.log("PRESS FROM NEWS DIV");
                console.log(this.props);
                //var propVal = {headline:this.props.headline, time:this.props.time, attachmentTotal:this.props.attachmentTotal, abstract:this.props.abstract, commentsTotal:this.props.commentsTotal};
                this.props.scrollHandler(this.props.headline,this.props.time,this.props.attachmentTotal,this.props.abstract,this.props.commentsTotal);
                this.setState({
                        clicked: true,
                        margin: 0
                });
        }
        render() {
                var s = this.props.abstract.substring(0, 480);
                //console.log("LENGTH IS : "+ s.length);
                if(this.props.abstract.length>480)
                        s = s.concat("...");


                //CREATE HEADLINE
                let headline =
                        <CardItem header button onPress={this.pressed.bind(this)}>
                                <Left>
                                        <Thumbnail square source={require('./img//newsThumbnail3.png')} />
                                        <Body>
                                                <Text style={{fontWeight: "bold", fontSize: 30}}>{this.props.headline}</Text>
                                                <View style={{flex: 1, flexDirection: "row"}}>
                                                        <View style={{flex: 1, flexDirection: "row"}}>
                                                                <Icon1 name="clock" size={18} style={{color: "black", top: ".1%"}}/>
                                                                <Text note> {this.props.time}</Text>
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
                        <CardItem button onPress={this.pressed.bind(this)}>
                                <Text style={{paddingLeft: "3%", paddingBottom: "6%", paddingRight: "3%" }}>
                                    {s}
                                </Text>
                        </CardItem>


                //CREATE FOOTER COMMENT PART
                let commentBox =
                        <CardItem header button onPress={this.pressed.bind(this)} style={{backgroundColor: "#e6e4e2"}}>
                                <View style={{flex: 1, flexDirection: "row", paddingLeft: "3%"}}>
                                    <Icon3 name="comments" size={28} style={{color: "grey"}}/>
                                    <Text note>  {this.props.commentsTotal} Comments</Text>
                                </View>
                        </CardItem>


                //CREATE NEWS DIV VAR
                let newsDiv =
                        <Card >
                                {headline}
                                {abstract}
                                {commentBox}
                        </Card>








                return (
                        <Content style={{margin: this.state.margin}}>
                                {newsDiv}
                        </Content>
                );
        }


}


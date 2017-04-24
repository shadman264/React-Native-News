

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Content, Thumbnail,Text} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';

export default class NewsDivs extends Component {
  render() {
      var s = this.props.textData.substring(0, 480);
      if(this.props.textData.length>480)
        s = s.concat("...");

      //******************to print console.log you have to type "react-native log-android"******************
      return (
            <Container>
                    <Content>
                        <Grid>
                            <Col style={{height: 100, width: '25%', paddingLeft: '6.5%', paddingTop: '5%' }}>
                                <Thumbnail square source={require('./img//newsThumbnail3.png')}/>
                            </Col>
                            <Col style={{height: 100, width: '75%', paddingTop: "5%" }}>
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
                            </Col>
                        </Grid>
                    </Content>
            </Container>
      );
  }


}


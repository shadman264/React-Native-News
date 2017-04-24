

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Content, Thumbnail} from 'native-base';
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
                            <Col style={{ backgroundColor: '#D954D7', height: 100, width: '25%', paddingLeft: '6.5%', paddingTop: '5%' }}>
                                <Thumbnail square source={require('./img//newsThumbnail3.png')}/>
                            </Col>
                            <Col style={{ backgroundColor: '#D93735', height: 100, width: '75%' }}></Col>
                        </Grid>
                    </Content>
            </Container>
      );
  }


}


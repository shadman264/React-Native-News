

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Content, Thumbnail,Text,Footer, FooterTab,Button,Fab,Icon,Modal} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';

export default class NewsDivs extends Component {

        constructor(props) {
                super(props);
                this.state = {
                    visible: false,
                };
        }

        openModalDialog(){
                console.log("clicked!!!!!!!!");
                this.setState({
                        visible: !this.state.visible,
                });
        }


        render() {

//                var s = this.props.textData.substring(0, 480);
//                if(this.props.textData.length>480)
//                s = s.concat("...");
                let ScreenHeight = Dimensions.get("window").height;
                let topHeadlineHeight = ScreenHeight * .15;
                let bottomFooterHeight = ScreenHeight * .06;
                let midArticleHeight = ScreenHeight * .75 - topHeadlineHeight;
                let midArticleBottomMargin = ScreenHeight * .04;

                console.log("ALL HEIGHTS :" + ScreenHeight+" " + topHeadlineHeight+" " + bottomFooterHeight+" " + midArticleHeight);


                //CREATE TOP HEADLINE DIV
                let topHeadline =
                        <Content style={{height : topHeadlineHeight}} scrollEnabled={ false }>
                                <Grid>
                                    <Col style={{height: 100, width: '25%', paddingLeft: '6.5%', paddingTop: '5%' }}>
                                        <Thumbnail square source={require('./img//newsThumbnail3.png')}/>
                                    </Col>
                                    <Col style={{height: 100, width: '75%', paddingTop: "5%" }}>
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
                                    </Col>
                                </Grid>
                        </Content>


                //CREATE BOTTOM COMMENT FOOTER
                let bottomCommentBox =
                        <Footer style={{height : bottomFooterHeight}}>
                            <FooterTab style={{backgroundColor: "#e6e4e2"}}>
                                <View style={{flex: 1, flexDirection: "row", paddingLeft: "6%", paddingTop: '2%'}}>
                                    <Icon3 name="comments" size={28} style={{color: "grey"}}/>
                                    <Text note>  {this.props.commentsTotal} Comments</Text>
                                </View>
                            </FooterTab>
                        </Footer>


                //CREATE MODAL DIALOG BOX
                let modalDialog;
                if(this.state.visible){
                        modalDialog =
                                <Content>
                                        <Text>BRO BRO</Text>
                                </Content>
                }


                //CREATE FLOATING COMMENT BUTTON
                let bottomFloatingCommentButton =
                        <Fab
                                active={this.state.visible}
                                direction="up"
                                containerStyle={{ marginLeft: 10 }}
                                style={{ backgroundColor: '#5067FF' }}
                                position="bottomRight"
                                onPress={() => this.setState({ visible: !this.state.visible })}>
                                        <Icon1 name="message" />
                                        <Button style={{ backgroundColor: '#34A34F' }}>
                                            <Icon name="logo-whatsapp" />
                                        </Button>
                                        <Button style={{ backgroundColor: '#3B5998' }}>
                                            <Icon name="logo-facebook" />
                                        </Button>
                                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                                            <Icon name="mail" />
                                        </Button>
                        </Fab>


                //CREATE MIDDLE NEWS ARTICLE DIV
                let midNewsArticle =

                        <Content style={{marginBottom: midArticleBottomMargin,height: midArticleHeight}} scrollEnabled={ true }>
                                <Text style={{paddingLeft: '6%', paddingRight: '6%', paddingTop: '3%', paddingBottom: '10%'}}>
                                        {this.props.article}
                                </Text>
                        </Content>


                //******************to print console.log you have to type "react-native log-android"******************
                return (
                    <Container>
                            <Content scrollEnabled={ false }>
                                {topHeadline}
                                {midNewsArticle}
                                {bottomCommentBox}
                                {bottomFloatingCommentButton}
                                {modalDialog}
                            </Content>
                    </Container>
                );
        }


}


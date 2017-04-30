

import React, { Component } from 'react';
import { View, Dimensions,Modal,TextInput, BackAndroid } from 'react-native';
import { Container, Content, Thumbnail,Text,Footer, FooterTab,Button,Fab,Icon,Item,Input,Left,CardItem,Body} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';


export default class NewsDivs extends Component {

        constructor(props) {
                super(props);
                this.handleBackButton = this.handleBackButton.bind(this);
                this.state = {
                    visible: false,
                    modalVisible: false,
                    backgroundColor: "white",
                    cmtBackgroundColor: "#e6e4e2",
                    margin: "3%",

                };
        }

        componentDidMount() {
                BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
        }

        componentWillUnmount() {
                BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
        }

        handleBackButton() {
                console.log('Back button is pressed');
                this.props.navigate();
                return true;
        }




        render() {

//                var s = this.props.textData.substring(0, 480);
//                if(this.props.textData.length>480)
//                s = s.concat("...");

                let ScreenHeight = Dimensions.get("window").height;
                let topHeadlineHeight = ScreenHeight * .15;
                let bottomFooterHeight = ScreenHeight * .06;
                let midArticleHeight = ScreenHeight * .75 - topHeadlineHeight;
                let midArticleBottomMargin = ScreenHeight * .03;
                let bottomCmntBoxPos = ScreenHeight * 0.75 ;

                let articleMarginTop = ScreenHeight * 0.03;

                let scrollMarginTop;
                //console.log("value of hasScrolled: ");
                //console.log(this.props.hasScrolled);
                if(this.props.hasScrolled){
                        scrollMarginTop = "18%";
                }
                else{
                        scrollMarginTop = "0%";
                }
                console.log("HEADLINE LENGTH : " + this.props.headline.length);
                if(this.props.headline.length>17){
                        articleMarginTop = ScreenHeight * 0.01;
                        midArticleHeight -= ScreenHeight * .03;
                }


                console.log("ALL HEIGHTS :" + ScreenHeight+" " + topHeadlineHeight+" " + bottomFooterHeight+" " + midArticleHeight);


                //CREATE TOP HEADLINE DIV
                let topHeadline =
                        <CardItem scrollEnabled={ false }>
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



                //CREATE BOTTOM COMMENT FOOTER
                let bottomCommentBox =
                        <Footer style={{height : bottomFooterHeight}}>
                            <FooterTab style={{backgroundColor: this.state.cmtBackgroundColor}}>
                                <View style={{flex: 1, flexDirection: "row", paddingLeft: "6%", paddingTop: '2%'}}>
                                    <Icon3 name="comments" size={28} style={{color: "grey"}}/>
                                    <Text note>  {this.props.commentsTotal} Comments</Text>
                                </View>
                            </FooterTab>
                        </Footer>


                //CREATE MODAL DIALOG BOX
                let modalBox =
                        <Content>
                                <Modal
                                        animationType={"slide"}
                                        transparent={true}
                                        visible={this.state.modalVisible}


                                        >

                                        <Content style={{ borderRadius: 6, margin: "10%",position: "absolute",width: "80%", marginTop: "33%", marginBottom: "67%", padding: "3%", backgroundColor: "white"}}>

                                            <TextInput
                                                style={{height: 40, borderColor: '#5a2fd1', borderWidth: 1, borderRadius: 6, height: 120, marginBottom: "6%", textAlignVertical: 'top'}}
                                                onChangeText={(text) => this.setState({text})}
                                                value={this.state.text}
                                                multiline={true}
                                                numberOfLines = {4}
                                                underlineColorAndroid="transparent"
                                                onKeyPress={() => this.setState({ modalMarginTop: "10%", modalMarginBottom: "10%"})}/>

                                            <Button full style={{ borderRadius: 6, backgroundColor: "#5a2fd1"}}
                                                onPress={() => this.setState({ modalVisible: false, backgroundColor: "white", cmtBackgroundColor: "#e6e4e2", margin: "3%"})}>
                                                <Text style={{color: "white"}}>SUBMIT</Text>
                                            </Button>
                                        </Content>






                                </Modal>
                        </Content>


                //CREATE FLOATING COMMENT BUTTON
                let bottomFloatingCommentButton =
                        <Fab
                                active={this.state.visible}
                                direction="up"
                                containerStyle={{ marginLeft: 10 }}
                                style={{ backgroundColor: '#5067FF' }}
                                position="bottomRight"
                                onPress={() => this.setState({ modalVisible: true, backgroundColor: "rgba(0,0,0,0.6)", cmtBackgroundColor: "rgba(0,0,0,0.6)", margin: 0})}>
                                        <Icon1 name="message" />

                        </Fab>


                //CREATE MIDDLE NEWS ARTICLE DIV
                let midNewsArticle =


                        <Content style={{marginBottom: midArticleBottomMargin,height: midArticleHeight, backgroundColor: "yellow", marginTop: articleMarginTop}}>
                                <Text style={{paddingLeft: '6%', paddingRight: '6%', paddingTop: '3%', paddingBottom: '10%'}}>
                                        {this.props.article}
                                </Text>
                        </Content>





                //******************to print console.log you have to type "react-native log-android"******************
                return (
                    <Container style={{backgroundColor: this.state.backgroundColor, margin: this.state.margin}}>
                            <Content scrollEnabled={ false }>
                                {topHeadline}
                                {midNewsArticle}
                                {bottomCommentBox}
                                {bottomFloatingCommentButton}
                                {modalBox}
                            </Content>
                    </Container>
                );
        }


}


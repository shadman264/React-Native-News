

import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Content, Thumbnail,Text,Footer, FooterTab,Button} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Foundation';

export default class NewsDivs extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        headlineHeight: 0,
                        headlineDimensionCalc: true,

                        footerHeight: 0,
                        footerDimensionCalc: true,
                };
        }

        findHeadlineDimesions(layout){
                const {x, y, width, height} = layout;
                let height2 = 2*height;
                this.setState({
                        headlineHeight: height2,
                        headlineDimensionCalc: true,
                });
        }

        findFooterDimesions(layout){
                const {x, y, width, height} = layout;
                this.setState({
                        footerHeight: height,
                        footerDimensionCalc: true,
                });
        }

        render() {

//                var s = this.props.textData.substring(0, 480);
//                if(this.props.textData.length>480)
//                s = s.concat("...");
                let ScreenHeight = Dimensions.get("window").height;
                let topHeadlineHeight = ScreenHeight * .15;
                let bottomFooterHeight = ScreenHeight * .1;
                let midArticleHeight = ScreenHeight * .75 - topHeadlineHeight;

                console.log("ALL HEIGHTS :" + ScreenHeight+" " + topHeadlineHeight+" " + bottomFooterHeight+" " + midArticleHeight);


                //CREATE TOP HEADLINE DIV
                let topHeadline =
                        <Content style={{height : topHeadlineHeight}} scrollEnabled={ false }>
                                <Grid onLayout={(event) => { this.findHeadlineDimesions(event.nativeEvent.layout) }}>
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


                //CREATE BOTTOM COMMENT FOOTER
                let bottomCommentBox =
                        <Footer style={{height : bottomFooterHeight}} onLayout={(event) => { this.findFooterDimesions(event.nativeEvent.layout) }}>
                            <FooterTab>
                                <Button full>
                                    <Text>Footer</Text>
                                </Button>
                            </FooterTab>
                        </Footer>

                //CREATE MIDDLE NEWS ARTICLE DIV
                //let ScreenHeight = Dimensions.get("window").height - Dimensions.get("window").height*0.38;
                //console.log("FIRST VAL : "+ ScreenHeight);
                ScreenHeight = Dimensions.get("window").height - parseFloat(this.state.headlineHeight) - parseFloat(this.state.footerHeight);
                //console.log("SECOND VAL : "+ ScreenHeight);

                let midNewsArticle;
                if(this.state.footerDimensionCalc==true && this.state.headlineDimensionCalc==true){
                        //console.log("THIRD VAL : "+ ScreenHeight);
                        midNewsArticle =

                                    <Content style={{backgroundColor: '#202020', paddingLeft: '6%', paddingRight: '6%', height: midArticleHeight}} scrollEnabled={ true }>
                                        <Text>
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                                Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                                        </Text>
                                    </Content>


                }


                //******************to print console.log you have to type "react-native log-android"******************
                return (
                    <Container style={{}}>
                            <Content style={{backgroundColor: 'yellow'}} scrollEnabled={ false }>
                                {topHeadline}
                                {midNewsArticle}
                                {bottomCommentBox}
                            </Content>
                    </Container>
                );
        }


}


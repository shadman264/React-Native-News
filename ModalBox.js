import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import {Container, Content, InputGroup, Input, Icon, Item, Button} from 'native-base'

export default class ModalExample extends Component {
        constructor(props) {
                super(props);
                this.state = {
                    modalVisible: false,
                };
        }


        setModalVisible(visible) {
                this.setState({modalVisible: visible});
        }

        render() {
                return (
                <Container style={{marginTop: 22}}>
                        <Content style={{backgroundColor: "#61605f"}}>
                                <Modal
                                animationType={"slide"}
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {alert("Modal has been closed.")}}

                                >
                                        <Container>
                                                <Content style={{ borderRadius: 6, margin: "10%", marginTop: "45%",marginBottom: "45%", padding: "3%", backgroundColor: "white"}}>

                                                    <Item regular style={{ borderRadius: 6, height: 120, marginBottom: "6%"}}>
                                                        <Input placeholder='Rounded Textbox'/>
                                                    </Item>
                                                    <Button full style={{ borderRadius: 6, backgroundColor: "#5a2fd1"}} onClick={() => {
                                                    this.setModalVisible(!this.state.modalVisible)
                                                    }}>
                                                            <Text style={{color: "white"}}>SUBMIT</Text>
                                                    </Button>
                                                </Content>
                                        </Container>





                                </Modal>
                                <Text>
                                        The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.The Modal component is a simple way to present content above an enclosing view.
                                </Text>
                                <TouchableHighlight onPress={() => {
                                this.setModalVisible(true)
                                }}>
                                        <Text>Show Modal</Text>
                                </TouchableHighlight>

                        </Content>
                </Container>
        );
  }
}
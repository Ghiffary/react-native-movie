import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/Ionicons";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';



class HeaderContoh extends Component {
  clicked() {
    alert('Clicked!');
  }

  render() {
      return (
        <Header style={{backgroundColor:'#f5f5f5'}}>
          <Left>
            {/* <Button transparent onPress={this.clicked}>
              <Icon name='arrow-back' />
            </Button> */}
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body style={{flex:50, justifyContent: 'center',alignItems:'center'}}>
            <Title style={{color:'#43484d'}} >{ this.props.title }</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon name='menu' />
            </Button> */}
          </Right>
        </Header>
      );
    }
  }

  export default HeaderContoh;

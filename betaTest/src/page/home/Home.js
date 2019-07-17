import React from 'react';
import {  View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator,createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/Ionicons";
import DetailsScreen from './Details'
// import HeaderContoh from '../../components/header'
import { Header, ThemeProvider } from 'react-native-elements';
import { Title,Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Listview from './Listview';
import Searcher from '../search'
import { List } from 'react-native-paper';

class HeaderContoh extends React.Component {
  
  constructor(props){
    super(props);
  }
    onFocus() {
        this.props.navigation.navigate('Searcher',  {})
      }

    render() {
        
      return (

        <Header style={{backgroundColor:'#f5f5f5'}}>
          {/* <Left>
           <Button transparent onPress={this.clicked}>
               <Icon name='arrow-back' />
            </Button>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
           */}
        
          <Body style={{margin:10}} >
            <Title style={{color:'#43484d'}} >{ "iMove "}</Title>
          </Body>
          <Right>
            <Button 
            transparent
            onPress={ () => this.props.navigation.navigate('Searcher',  {})}
            >
              <Icon name='search' style={{color:'black'}}/>
            </Button>
            <Button 
            transparent
            >
              <Icon name='ios-notifications' style={{color:'black'}}/>
            </Button>
          </Right>
        </Header>
      );
    }
  }

const TabScreen = createMaterialTopTabNavigator(
    {
      Home: { screen: Listview,
        navigationOptions: {
            header: null
        } },
    //   Settings: { screen: DetailsScreen },
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColxor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      },
    }
  );

  



const Nav = createStackNavigator(
  {
      Home: {
          screen: Listview,
          navigationOptions: {
              header: null
          }
      },
    //   Details: {
    //       screen: DetailsScreen,
         
    //   },
      Searcher:{
          screen: Searcher,
          navigationOptions: {
            header: null
        }
      },
      TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            // header:null
          headerStyle: {
            backgroundColor: '#633689',
          },
          headerTintColor: '#FFFFFF',
        //   title: <HeaderContoh/>,
        header: <HeaderContoh/>

        },
      },
      
  },
  {
      initialRouteName: 'TabScreen'
  }
  );

//  export default createAppContainer(Nav);

export default createAppContainer(createSwitchNavigator(
    {
        Home :{
            screen:Nav},

            
        
    },

    {
        initialRouteName : 'Home',
    }
))




import React from 'react';
import {  View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/Ionicons";
import DetailsScreen from './Details'
import HeaderContoh from '../../component/header'
import FetchExample from './TryGetJson'
import { Header, ThemeProvider } from 'react-native-elements';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Listview from './Listview';



class HomeScreen extends React.Component {
  
  
  render() {
    return (

      <Container>
        {/* <List/> */}
        
      
    </Container>


    );
  }
}


const Nav = createStackNavigator(
  {
      Home: {
          screen: Listview,
          navigationOptions: {
              header: null
          }
      },
      Details: {
          screen: DetailsScreen,
         
      },
      FetchExample:{
        screen: FetchExample
      }
  },
  {
      initialRouteName: 'Home'
  }
  );

 export default createAppContainer(Nav);




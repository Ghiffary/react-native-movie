import React,{Component} from 'react';
import {  View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator,createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import TopSlider from './topSlider'
import HeaderFix from '../../components/header'


export default class HomeScreen extends Component {

  constructor(props){
    super(props);

  }

  render(){

    return(
      <>
        <HeaderFix
          title="Allstars" 
        />
        <TopSlider/>
      </>

    );

  }
}




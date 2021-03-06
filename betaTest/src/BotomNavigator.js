import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from './screen/home';
import SettingsScreen from './screen/setting/index.js.js';
import ProfileScreen from './screen/profile/index.js.js';
//import DetailsScreen from './page/home/Details';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default Bot = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: {screen: SettingsScreen},
    Profile:{screen: ProfileScreen},
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `settings${focused ? '' : '-outline'}`;
        }else if (routeName === 'Profile'){
          iconName = `account${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


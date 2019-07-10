
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox, CheckBoxProps } from 'react-native-ui-kitten';
import CheckBoxShowcase from '../../components/Nav'



class SettingsScreen extends Component {
  
    render() {
      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }
  
  export default createAppContainer(SettingsScreen);
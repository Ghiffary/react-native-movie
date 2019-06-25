import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";


class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <Icon
  name="md-add"
  color="#ccc"
  size={25}
/>
      </View>
      
    );
  }
}



export default createAppContainer(ProfileScreen);

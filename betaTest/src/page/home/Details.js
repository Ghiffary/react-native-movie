// import React from 'react';
// import { Text, View, Button } from 'react-native';
// import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/Ionicons";
// // import { Image } from 'react-native-elements';
// import Image from '../../component/Image'

import React, {Component} from 'react';
import {TouchableHighlight, FlatList, ActivityIndicator, View, Image, Alert,StackNavigator  } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
//import DetailsScreen from './Details';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
// import DetailsScreen from './Details'
import HeaderContoh from '../../component/header'



class DetailsScreen extends Component {
  //   render() {
  //     return (
  //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //         <Text>Details!</Text>
  //         <Image image={{uri: item._embedded.show.image === null?"https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png":item._embedded.show.image.medium}}/>

  //       </View>
  //     );
  //   }
  // }

  // export default createAppContainer(DetailsScreen);

  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://api.tvmaze.com/shows/3377',
    // {headers: new Headers({
    //   'Authorization': 'Basic '+btoa('username:password'), 
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // })
    // // ,body: 'A=1&B=2'
    // }
    )
      .then((response) => response.json())
      .then((responseJson) => {
          // console.log(responseJson._embedded.episodes)
          
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          // dataSource: responseJson.description,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
      
    );
  }
  onItemPress() {
    console.log("Pressed.");
    this.props.navigation.navigate('DetailsScreen');
    //console.log(this.props.navigation)
  }

}

const HomeStack = createStackNavigator({

  Home : {
      screen: DetailsScreen,
      navigationOptions: {
          header: null
      }},

      // DetailsScreen : {screen: DetailsScreen },
  // Listview : {screen:Listview},
  // tryGetJson : {screen : tryGetJson}
});

export default createAppContainer(createSwitchNavigator(
  {
      Home :HomeStack
  },
  {
      initialRouteName : 'Home',
  }
));
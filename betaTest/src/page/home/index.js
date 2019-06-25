import React from 'react';
import {  View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/Ionicons";
import DetailsScreen from './Details'
import HeaderContoh from '../../component/header'
import FetchExample from './TryGetJson'
import { Header, ThemeProvider } from 'react-native-elements';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';




class HomeScreen extends React.Component {
  
  
  render() {
    return (

      <Container>
        <HeaderContoh title="Allstars Movie List" style={{}}/>
        {/* <List/> */}
        <FetchExample/>
      {/* <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>


        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>



        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>


      </Content> */}
    </Container>


  //     <View style={{flex:1}}>
  //       <HeaderContoh title="Allstars" style={{}}/>
  //       <FetchExample/>
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       {/* <HeaderContoh/> */}
       
  //       <Text>Home!</Text>
  //       <Button
  //         title="Go to Settings"
  //         onPress={() => this.props.navigation.navigate('Settings')}
  //       />
  //       <Button
  //         title="Go to Details"
  //         onPress={() => this.props.navigation.navigate('Details')}
  //       />
  //     </View>
      
  // </View>
    );
  }
}


const Nav = createStackNavigator(
  {
      Home: {
          screen: HomeScreen,
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




import React, {Component} from 'react';
import {TouchableHighlight, FlatList, ActivityIndicator, View, Image, Alert,StackNavigator  } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
//import DetailsScreen from './Details';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
import DetailsScreen from './Details'
import HeaderContoh from '../../component/header'

class Listview extends Component {


 constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://api.tvmaze.com/schedule/full',
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

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{flex: 1, paddingTop:0}}>
      <HeaderContoh title="Allstars Movie List" style={{}}/>
        <FlatList
          // initialScrollIndex={10}
          initialNumToRender={2}
          data={this.state.dataSource}
          renderItem={({item}) =>
          <TouchableHighlight
      // // onPress={() => this._onPress(item)}
      // // // onShowUnderlay={item._embedded.show.name}
      // // onHideUnderlay={item._embedded.show.name}
      // // onPress={() => Alert.alert(item._embedded.show.name) }
      // // onPress={() => this.goToNextScreen()}
      onPress={() => this.onItemPress()}
      // onPress={() => this.props.navigation.navigate('DetailsScreen')}
      underlayColor='black'
      
      >
          <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: item._embedded.show.image === null?"https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png":item._embedded.show.image.medium}} />
              {/* {console.log(item._embedded.show.image === null?"https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png":item._embedded.show.image.medium)} */}
              <Body>
                
              <Text>{item._embedded.show.name}</Text>
                <Text note>Genre {item._embedded.show.genres === null?"-":item._embedded.show.genres + " " }</Text>
                {/* <Text>{item.airtime}</Text> */}
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri:item._embedded.show.image === null?"https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png":item._embedded.show.image.original}} style={{height: 500, objectFit: 'cover', flex: 1}}/>
            {/* {console.log(item.image.original)} */}
          </CardItem>
          <CardItem>
            <Left>
              {/* <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button> */}
            </Left>
            <Body>
              {/* <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button> */}
            </Body>
            <Right>
              <Text>Daily at {item._embedded.show.schedule.time} ({item._embedded.show.runtime} min)</Text>
            </Right>
          </CardItem>
        </Card>
        </TouchableHighlight>
          }
          keyExtractor={({id}, index) => id}
        />

        
      </View>
      
    );
  }
  onItemPress() {
    console.log("Pressed.");
    this.props.navigation.navigate('DetailsScreen',{
      itemId: 86,
      otherParam: 'anything you want here',
    });
    //console.log(this.props.navigation)
  }

}

const HomeStack = createStackNavigator({

  Home : {
      screen: Listview,
      navigationOptions: {
          header: null
      }},

      DetailsScreen : {screen: DetailsScreen },
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
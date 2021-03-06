import React, {Component} from 'react';
import {TouchableHighlight, FlatList, ActivityIndicator, View, Image, Alert,StackNavigator,WebView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Rating, AirbnbRating } from 'react-native-elements';
import HeaderContoh from '../../../components/header';
import Mage from '../../../components/Image';
import { ScrollView } from 'react-native-gesture-handler';
import { Tile } from 'react-native-elements';
import GeneralStatusBarColor from '../../../components/style/GeneralStatusBarColor';
import api from '../../../api/url'



export default class DetailsScreen extends Component {
  
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true, 
      itemId: this.props.navigation.state.params.Item
    }
    
  }

  componentDidMount(){
    return fetch(api.detailMovie+this.state.itemId,
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

  static navigationOptions = {
    //Setting the header of the screen
    title: 'Movie Details',
  };

  render(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        {/* <GeneralStatusBarColor 
      backgroundColor="#ccc"
      barStyle="dark-content"/>  */}
          <ActivityIndicator/>
        </View>
      )
    }

    // const tes = this.state.dataSource.map((item,key)=>
    // <Text>{item.name}</Text>
    // );
    return(
     
      <>
      <View>
      
        <ScrollView>
             
          <Mage 
          url={this.state.dataSource.image === null?"https://cdn.moviemovie.com.hk/teaser/og-image.jpg":this.state.dataSource.image.original}
          />
          {/* <Button 
            transparent
            onPress={ () => this.props.navigation.navigate('Searcher')}
            >
              <Icon name='ios-search' style={{color:'black'}}/>
            </Button> */}
          
          <Text>
          </Text>
          <View pointerEvents="none" >
            <Rating 
            showRating fractions={2} 
            startingValue={this.state.dataSource.rating.average === null?"4":this.state.dataSource.rating.average}
            style={{ padding: 10 }}
            imageSize={20}
            ratingCount={10}
            
            />
              {/* <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button> */}
              </View>
          <View style={{margin:10}}>
                <Text>
                    Title : {this.state.dataSource.name}
                </Text>
                <Text>
                    description : {this.state.dataSource.summary=== null? "": this.state.dataSource.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                </Text>
          </View>
          
        </ScrollView>
         

      
      </View>
      </>
      // <WebView source={{html: this.state.dataSource.summary}} />

      
    );
  }
 

}


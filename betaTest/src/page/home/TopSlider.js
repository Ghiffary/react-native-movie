import React, {Component} from 'react';
import {TouchableHighlight, 
        FlatList, 
        ActivityIndicator, 
        View, 
        Image, 
        Alert,
        StackNavigator  } from 'react-native';
import { Title,
         Header,
         Container, 
         Content, 
         Card, 
         CardItem, 
         Thumbnail, 
         Text, 
         Button, 
         Icon, 
         Left, 
         Body, 
         Right } from 'native-base';
import { createBottomTabNavigator, 
         createAppContainer,
         createStackNavigator, 
         createSwitchNavigator,
         createMaterialTopTabNavigator } from 'react-navigation';
import { Rating, AirbnbRating } from 'react-native-elements';
// import HeaderContoh from '../../components/header'
import Details from './Details'
import Searching from '../../components/searchBar'
// import Input from '../../components/searchBar'
import { SearchBar } from 'react-native-elements';
import Listview from './Listview';
import Searcher from '../search'
import NavigationService from '../../navigationRoute/service'




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
          // onPress={ () => this.props.navigation.navigate('Searcher',  {})}
          onPress={()=> NavigationService.navigate('Searcher')}
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


  



//  export default createAppContainer(Nav);

export default createSwitchNavigator(
    {
        Home :{
            screen:Listview},

            
        
    },

    {
        initialRouteName : 'Home',
    }
)
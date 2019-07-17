import React, {Component} from 'react';
import {AppRegistry,StatusBar } from 'react-native';
import Route from './src/Routes';
import {Root} from 'native-base';
import NavigationService from './src/service';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import DetailsScreen from './src/page/home/Details';
import Searcher from './src/page/search';
import GeneralStatusBarColor from './src/components/style/GeneralStatusBarColor';


const TopLevelNavigator = createStackNavigator({
  Main:{
    screen: Route,
    navigationOptions:{
      header:null
    }
  },
  DetailsScreen : {
    screen: DetailsScreen 
  },
  Searcher:{
      screen: Searcher,
      navigationOptions: {
        header: null
    }
  },
});
const AppContainer = createAppContainer(TopLevelNavigator);


// AppRegistry.registerComponent(appName, () => App);
export default class App extends Component{
  
  render(){
    return(
      // <Root>
      <>
      {/* <GeneralStatusBarColor 
      backgroundColor="#ccc"
      barStyle="dark-content"/>         */}
      <AppContainer
          ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
        </>
      // </Root>

    );
  }
}

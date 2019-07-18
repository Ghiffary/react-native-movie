import React, {Component} from 'react';
import {AppRegistry,StatusBar } from 'react-native';
import AppContainer from './src/navigationRoute/Routes';
import {Root} from 'native-base';
import NavigationService from './src/navigationRoute/service';



// AppRegistry.registerComponent(appName, () => App);
export default class App extends Component{
  
  render(){
    return(
      // <Root>
      <>
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

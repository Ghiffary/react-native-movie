import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Route from './src/Routes';
import {Root} from 'native-base';

// AppRegistry.registerComponent(appName, () => App);
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Root>
        <Route/>
      </Root>

    );
  }
}

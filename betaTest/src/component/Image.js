import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

// Standard Image

export default class mage extends Component{
// Image with custom placeholder content
render(){
<Image
  source={ this.props.image }
  style={{ width: 200, height: 200 }}
  PlaceholderContent={<ActivityIndicator />}
/>
}

}
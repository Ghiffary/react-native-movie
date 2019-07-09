import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

// Standard Image

export default class mage extends Component{
  
// Image with custom placeholder content
render(){

  return(
<Image
  source={ {uri:this.props.url} }
  style={{ width: 200, height: 300 }}
  PlaceholderContent={<ActivityIndicator />}
/>
  )
}


}
import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'native-base';

export default class App extends Component {
  state = {
    search: '',
  };
  onFocus () {
    // const {navigate} = this.props.navigation;
    // navigate('SearchPage')
    
  }

  onItemSearch =(search) =>{

    const {navigate} = this.props.navigation;
    navigate('SearchPage',{
      ItemSearch:search,
    })
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      
        
     
      <SearchBar
        placeholder="Type Here..."
        platform="ios"
        onChangeText={this.updateSearch}
        value={search}
        onFocus={ () => this.onFocus() }
        containerStyle={{
        height: 60,
        borderTopWidth: 0,
        paddingRight:10,
        paddingLeft:10,
      }}
      />
       
    );
  }
}
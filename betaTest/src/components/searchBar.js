import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'native-base';

export default class App extends Component {
  state = {
    search: '',
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
    });
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
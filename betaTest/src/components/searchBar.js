import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';

export default class App extends Component {
  state = {
    search: '',
  };

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
import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'native-base';
import Listview from '../page/home/Listview';
import { withNavigation } from 'react-navigation';
import NavigationService from '../service'


class Sear extends Component {
  state = {
    search: '',
  };
  constructor(props) {

    super(props)

   Obj = new Listview();

  }
  CallFunction_1 (){

    // Obj.onFocus() ;
    NavigationService.navigate('Searcher')

   }
  // onFocus () {
  //   // const {navigate} = this.props.navigation;
  //   // navigate('SearchPage')
    
  // }

 

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      
        <View>
     
      <SearchBar
        placeholder="Type Here..."
        platform="ios"
        onChangeText={this.updateSearch}
        value={search}
        onFocus={this.CallFunction_1}
        // onFocus={ () => this.onFocus() }
        containerStyle={{
        height: 60,
        borderTopWidth: 0,
        paddingRight:10,
        paddingLeft:10,
      }}
      />
       </View>
    );
  }
}

export default withNavigation(Sear);

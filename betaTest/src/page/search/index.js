import * as React from 'react';
import { TouchableHighlight,Image, View, StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import { SearchBar} from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

 
export default class Searcher extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: false, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    // return 
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };



  SearchFilterFunction(text) {
    fetch('http://api.tvmaze.com/search/shows?q='+text)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            // isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
    //passing the inserted text in textinput
    // const newData = this.arrayholder.filter(function(item) {
    //   //applying filter for the inserted text in search bar
    //   const itemData = item.show.name ? item.show.name.toUpperCase() : ''.toUpperCase();
    //   const textData = text.toUpperCase();
    //   return itemData.indexOf(textData) > -1;
    // });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      // dataSource: newData,
      search:text,
    });
  }


  onItemPress =(id) => {
    const { navigate } = this.props.navigation;
    //console.log(this.state.username);
    navigate('DetailsScreen',{
      Item: id
    });
    // //console.log(this.props.navigation)
  }

  ListViewItemSeparator = () => {
    //Item sparator view


    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          platform = "ios"
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          containerStyle={{
        height: 60,
        borderTopWidth: 0,
        paddingRight:10,
        paddingLeft:10,
      }}
          />
          <FlatList
          data={this.state.dataSource}
          // ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            <TouchableHighlight
            onPress={() => this.onItemPress(item.show.id)}
      // onPress={() => this.props.navigation.navigate('DetailsScreen')}
      underlayColor='black'
      
      >

            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: item.show.image === null? "https://cdn.moviemovie.com.hk/teaser/og-image.jpg" :item.show.image.medium}} />
                <Body>
                  <Text>{item.show.name}</Text>
                  <Text note>{item.show.premiered === null?  "-" : item.show.premiered.substring(0,4)}</Text>
                </Body>
              </Left>
            </CardItem>
          
          </Card>
          </TouchableHighlight>
            // Single Comes here which will be repeatative for the FlatListItems
            // <Text style={styles.textStyle}>{item.show.name}</Text>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
    );
  }
}
 
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 30 : 0
  },
  textStyle: {
    padding: 10,
  },
});
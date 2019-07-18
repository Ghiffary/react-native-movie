import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
// import Icon from "react-native-vector-icons/Ionicons";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import NavigationService from '../navigationRoute/service'



class HeaderContoh extends Component {
  clicked() {
    alert('Clicked!');
  }

  onFocus() {
    NavigationService.navigate('Searcher')

  }
  

  render() {
      return (
        <Header 
        style={{backgroundColor:'#f5f5f5'}}
        iosStatusbar="light-content"
        androidStatusBarColor='#ccc'
        >
        {/* <Left>
         <Button transparent onPress={this.clicked}>
             <Icon name='arrow-back' />
          </Button>
        <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
         */}
      
        <Body style={{margin:10}} >
          <Title style={{color:'#43484d'}} >{ this.props.title}</Title>
        </Body>
        <Right>
          <Button 
          transparent
          onPress={ () => this.onFocus() }
          >
            <Icon name='ios-search' style={{color:'black'}}/>
          </Button>
          <Button 
          transparent
          >
            <Icon name='ios-notifications' style={{color:'black'}}/>
          </Button>
        </Right>
      </Header>
      );
    }
  }

  export default HeaderContoh;

// import React, { Component } from 'react';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

// export default class HeaderContoh extends Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon name='arrow-back' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Header</Title>
//           </Body>
//           <Right>
//             <Button transparent>
//               <Icon name='search' />
//             </Button>
//             <Button transparent>
//               <Icon name='heart' />
//             </Button>
//             <Button transparent>
//               <Icon name='more' />
//             </Button>
//           </Right>
//         </Header>
//       </Container>
//     );
//   }
// }
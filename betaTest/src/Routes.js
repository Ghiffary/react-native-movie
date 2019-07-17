import { createBottomTabNavigator, createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
import botomnav from './BotomNavigator';
import DetailsScreen from './page/home/Details';
import Searcher from './page/search'
import SearcBar from './components/searchBar'


// import Listview from './page/home/Listview';
// import tryGetJson from './page/home/TryGetJson';



const HomeStack = createStackNavigator({

    Home : {
        screen: botomnav,
        navigationOptions: {
            header: null
        }},

        DetailsScreen : {
            screen: DetailsScreen,
            // navigationOptions:{
            //     header:null
            // } 
        
        },
        Searcher:{
            screen: Searcher,
            navigationOptions: {
              header: null
          },
          SearcBar:{
              screen:SearcBar,
          }
        }
    // Listview : {screen:Listview},
    // tryGetJson : {screen : tryGetJson}

});

export default createAppContainer(createSwitchNavigator(
    {
        Home :HomeStack
    },
    {
        initialRouteName : 'Home',
    }
))
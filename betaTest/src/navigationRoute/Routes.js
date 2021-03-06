import { createStackNavigator,createAppContainer } from 'react-navigation';
import DetailsScreen from '../screen/home/movieList/Details';
import Searcher from '../screen/search';
import BotNav from '../BotomNavigator';

const TopLevelNavigator = createStackNavigator({
  Main:{
    screen: BotNav ,
    navigationOptions:{
      header:null
    }
  },
  DetailsScreen : {
    screen: DetailsScreen 
  },
  Searcher:{
      screen: Searcher,
      navigationOptions: {
        header: null
    }
  },
});
const AppContainer = createAppContainer(TopLevelNavigator);

export default AppContainer;
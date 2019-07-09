import { createBottomTabNavigator, createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';
import botomnav from './BotomNavigator';
import DetailsScreen from './page/home/Details';
// import Listview from './page/home/Listview';
// import tryGetJson from './page/home/TryGetJson';

const HomeStack = createStackNavigator({

    Home : {
        screen: botomnav,
        navigationOptions: {
            header: null
        }},

        DetailsScreen : {screen: DetailsScreen },
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
const Nav = createStackNavigator(
{
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Details: {
        screen: DetailsScreen,
        
    }
},
{
    initialRouteName: 'Home'
}
);

export default createAppContainer(Nav);

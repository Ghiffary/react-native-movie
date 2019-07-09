// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

// class DetailsScreen extends React.Component {
//   render() {
//     /* 2. Get the param, provide a fallback value if not available */
//     const { navigation } = this.props;
//     const itemId = navigation.getParam('itemId', 'NO-ID');
//     const otherParam = navigation.getParam('otherParam', 'some default value');

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() =>
//             this.props.navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Details',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
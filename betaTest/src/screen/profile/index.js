import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileScreen1 from './isi';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileScreen1/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(47,44,60,1)',
  },
});

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
  Platform
} from 'react-native';

import { Map } from './Map';

function reloadApp() {
  // TODO: this is iOS only
  NativeModules.DevMenu.reload();
}

export const GISScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native GIS Map!
        </Text>

        <View style={{ width: 300, height: 300 }}>
          <Map navigation={navigation} />
        </View>

        {Platform.OS === 'ios' && 
        <View>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>

        <Button
          title="Reload JavaScript"
          onPress={reloadApp}
        />
        </View>}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

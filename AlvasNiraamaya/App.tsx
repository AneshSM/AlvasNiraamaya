/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  // useColorScheme,
  // View,
} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Navigation} from './src';

function App(): JSX.Element {
  const style = {
    root: {flex: 1},
  };
  return (
    <SafeAreaView style={style.root}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;

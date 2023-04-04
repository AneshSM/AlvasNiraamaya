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
  StatusBar,
  StyleSheet,
  // StyleSheet,
  // Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Navigation} from './src';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const style = {
    root: {flex: 1},
    root_view: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      flex: 1,
    },
  };
  return (
    <SafeAreaView style={style.root}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={style.root_view}>
        <Navigation />
      </View>
    </SafeAreaView>
  );
}

export default App;

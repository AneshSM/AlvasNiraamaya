import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/Navigation/Navigation';
import {COLORS} from './src/constants';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgclr,
  },
});

export default App;

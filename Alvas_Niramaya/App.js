import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { bgclr } from './src/const/Colour/color';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:bgclr,
  }
});

export default App;

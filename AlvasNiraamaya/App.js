/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Router from './src/Router/Router';
import {AuthProvider} from './src/context/AuthProvider';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const style = {
    root: {flex: 1},
  };

  return (
    <AuthProvider>
      <SafeAreaView style={style.root}>
        <Router />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;

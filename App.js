/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import Home from './src/presentation/screen/home/Home';

const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Home/>
    </SafeAreaView>
  );
}

export default App;

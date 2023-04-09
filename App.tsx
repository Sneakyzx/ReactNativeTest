/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {navigationRef} from './src/navigation/NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/sence/RootScenes';





function App(): JSX.Element {
  

  return (
    <NavigationContainer ref={navigationRef}>
    <Root />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;

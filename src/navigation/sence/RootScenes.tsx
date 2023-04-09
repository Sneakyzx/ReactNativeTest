import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import navigationConfigs from '../config/options';
import {APP_ROUTE, AUTHENTICATE_ROUTE,} from '../config/routes';
import AuthStack from './AuthScenes';
import MainTabContainer from './TabScenes';

export type RootStackParamList = Record<string, any>;

const MainStack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={APP_ROUTE.MAIN_TAB}
        component={MainTabContainer}
      />
    </MainStack.Navigator>
  );
};

const Root = () => {
  return <AuthStack />;
};

export default Root;

const styles = StyleSheet.create({});

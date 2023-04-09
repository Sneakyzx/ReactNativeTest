import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationConfigs from '../config/options';
import {AUTHENTICATE_ROUTE, TAB_NAVIGATION_ROOT, HOME_ROUTE ,} from '../config/routes';
import {RootStackParamList} from './RootScenes';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../features/home/HomeScreen';
import DetailsScreen from '../../Screens/DetailsScreen';
import NoteDetailsScreen from '../../Screens/NoteDetailsScreen';


const MainStack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN}
        component={HomeScreen}
      />
      <MainStack.Screen
        name={TAB_NAVIGATION_ROOT.ADDNOTE_ROUTE.ADDNOTE_SCREEN}
        component={DetailsScreen}
      />
        <MainStack.Screen
        name={TAB_NAVIGATION_ROOT.DETAILS_ROUTE.DETAILS_SCREEN}
        component={NoteDetailsScreen}
      />
    </MainStack.Navigator>
  );
};

export default AuthStack;

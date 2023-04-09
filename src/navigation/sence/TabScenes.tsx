import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// Screen
import React from 'react';
import HomeScreen from '../../features/home/HomeScreen';
import StyledTabBar from '../component/StyledTabBar';
import navigationConfigs, {tabScreenOptions} from '../config/options';
import {TAB_NAVIGATION_ROOT} from '../config/routes';
import NoteDetailsScreen from '../../Screens/NoteHomeScreens';
import DetailsScreen from '../../Screens/DetailsScreen';
import NoteList from '../../Screens/NoteList';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
  <MainStack.Navigator screenOptions={navigationConfigs}>
    <MainStack.Screen
      name={TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT}
      component={HomeScreen}
    />
  </MainStack.Navigator>
);

  const HomeScreenStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
      <MainStack.Screen
        name={TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN}
        component={HomeScreen}
      />
    </MainStack.Navigator>)
  const AddNoteStack = () => (
      <MainStack.Navigator screenOptions={navigationConfigs}>
        <MainStack.Screen
          name={TAB_NAVIGATION_ROOT.ADDNOTE_ROUTE.ADDNOTE_SCREEN}
          component={DetailsScreen}
        />
      </MainStack.Navigator>
      
);



const MainTabContainer = () => {
  const ArrayTabs = [
    {
      name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
      title: 'Home',
      component: HomeScreenStack,
      // icon: Images.icons.menu,
    },
    {
      name : TAB_NAVIGATION_ROOT.ADDNOTE_ROUTE.ROOT,
      tittle : 'AddNote',
      component : AddNoteStack
    },
    {
      name : TAB_NAVIGATION_ROOT.DETAILS_ROUTE.ROOT,
      tittle : 'DetailsNote',
      component : NoteDetailsScreen
    }
  ];
  return (
    <MainTab.Navigator
      screenOptions={tabScreenOptions}
      tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}>
      {ArrayTabs.map((item, index) => (
        <MainTab.Screen
          key={`${index}`}
          options={({navigation}) => {
            const {routes, index} = navigation.getState();
            const {state} = routes[index];
            let tabBarVisible = true;
            if (state) {
              const {routes, index} = state;
              const exploreActiveRoute = routes[index];
              if (exploreActiveRoute?.name !== routes[0]?.name)
                tabBarVisible = false;
            }
            return {
              title: item.title,
              tabBarVisible: tabBarVisible,
            };
          }}
          {...item}
        />
      ))}
    </MainTab.Navigator>
  );
};

export default MainTabContainer;

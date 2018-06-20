/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  SectionList
} from 'react-native';
import {
  StackNavigator,
  // DrawerNavigator,
  TabNavigator,
  // NavigationActions,
  // TabBarTop,
  TabBarBottom
} from 'react-navigation';

import ProfileScreen from './app/containers/ProfileScreen';
import OverviewScreen from './app/containers/OverviewScreen';
import LessonListScreen from './app/containers/LessonListScreen';
import DisciplineListScreen from './app/containers/DisciplineListScreen';
import SplashScreen from './app/containers/SplashScreen';

const navigationOptions = {
  // headerStyle: themeStyle.headerStyle,
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
}

const CourseStack = StackNavigator({
  OverviewScreen: OverviewScreen,
  LessonListScreen: { screen: LessonListScreen },
}, {
  navigationOptions: {
    // ...navigationOptions,
    tabBarLabel: 'Overview',
  }
})

const DownloadStack = StackNavigator({
  DisciplineListScreen: { screen: DisciplineListScreen },
}, {
  navigationOptions: {
    // ...navigationOptions,
    tabBarLabel: 'Downloads',
  }
})

const ProfileStack = StackNavigator({
  ProfileScreen: { screen: ProfileScreen },
}, {
  navigationOptions: {
    // ...navigationOptions,
    tabBarLabel: 'Profile',
  }
})

const MainTabNavigator = TabNavigator({
  CourseStack: { screen: CourseStack },
  DownloadStack: { screen: DownloadStack },
  ProfileStack: { screen: ProfileStack },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
})

const AuthStack = StackNavigator({
  SplashScreen: { screen: SplashScreen },
}, {
  headerMode: 'none'
})

const MainStack = StackNavigator({
  AuthStack: { screen: AuthStack },
  MainTabNavigator: { screen: MainTabNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'AuthStack'
})

export default class App extends Component {
  render() {
    return (
      <MainStack />
    );
  }
}
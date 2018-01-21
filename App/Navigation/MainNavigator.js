import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

import WelcomeScreen from '../Screens/Welcome';
import AuthScreen from '../Screens/Auth';
// import CreateUserScreen from '../Screens/Auth/CreateUser';
// import ValidationScreen from '../Screens/Auth/Validation';
// import LoginScreen from '../Screens/Auth/Login';
// import FacebookLoginScreen from '../Screens/Auth/Facebook';

import HomeScreen from '../Screens/Home';
import RoutineChooserScreen from '../Screens/RoutineChooser';
import RoutineBuilderScreen from '../Screens/RoutineBuilder';
import RoutineTimerScreen from '../Screens/RoutineTimer';
import SettingsScreen from '../Screens/Settings';

import Colors from '../Themes/colors';

const AuthPath = StackNavigator({
  Auth: {
    screen: AuthScreen,
    path: '/auth',
    navigationOptions: { header: null }
  },
  // CreateUser: {
  //   screen: CreateUserScreen,
  //   path: '/auth/create_user',
  //   navigationOptions: { tabBarVisible: true }
  // },
  // Validation: {
  //   screen: ValidationScreen,
  //   path: '/auth/validate',
  //   navigationOptions: { tabBarVisible: true }
  // },
  // Login: {
  //   screen: LoginScreen,
  //   path: '/auth/login',
  //   navigationOptions: { tabBarVisible: true }
  // },
  // Facebook: {
  //   screen: FacebookScreen,
  //   path: '/auth/facebook',
  //   navigationOptions: { tabBarVisible: true }
  // },
})

const AuthNavigator = TabNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: { tabBarVisible: true }
  },
  Auth: {
    screen: AuthPath,
    navigationOptions: { tabBarVisible: true }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Back',
      header: null
    },
  },
  Chooser: {
    screen: RoutineChooserScreen,
    path: '/routine/chooser',
    navigationOptions: {
      title: 'Choose a Routine'
    },
  },
  Builder: {
    screen: RoutineBuilderScreen,
    path: '/routine/builder',
    navigationOptions: {
      title: 'Build a Routine',
    },
  },
  Timer: {
    screen: RoutineTimerScreen,
    path: '/routine/timer',
    navigationOptions: {
      title: 'Timer',
    },
  }
});

const MainPath = TabNavigator(
  {
    MainTab: {
      screen: MainNavigator,
      path: '/',
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: SettingsScreen,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      hideIndex : [ 0 ], 
      showLabel: false,
      showIcon: true,
      activeTintColor: Colors.gong,
      inactiveTintColor: Colors.gong
  },
  }
);

const MasterNavigator = StackNavigator({
  AuthPath: {
    screen: AuthNavigator,
    path: '/auth',
    navigationOptions: {
      header: null
    }
  },
  MainPath: {
    screen: MainPath,
    navigationOptions: {
      header: null
    }
  },
});

export default MasterNavigator;
import React from 'react';
import { StackNavigator, TabNavigator, Header } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements'

import WelcomeScreen from '../Screens/Welcome';
import AuthScreen from '../Screens/Auth/Auth';
import LoginScreen from '../Screens/Auth/Login';
import SignupScreen from '../Screens/Auth/Signup';
import ValidationScreen from '../Screens/Auth/Validation';

import HomeScreen from '../Screens/Home';
import RoutineChooserScreen from '../Screens/RoutineChooser';
import RoutineBuilderScreen from '../Screens/RoutineBuilder';
import RoutineTimerScreen from '../Screens/RoutineTimer';
import PoseViewerScreen from '../Screens/PoseViewer';
import PoseBuilderScreen from '../Screens/PoseBuilder';
import SettingsScreen from '../Screens/Settings';

import Colors from '../Themes/colors';
import Fonts from '../Themes/fonts';

const AuthPath = StackNavigator({
  Auth: {
    screen: AuthScreen,
    path: '/auth',
    navigationOptions: { header: null }
  },
  Login: {
    screen: LoginScreen,
    path: '/auth/login',
    navigationOptions: { header: null }
  },
  Signup: {
    screen: SignupScreen,
    path: '/auth/signup',
    navigationOptions: { header: null }
  },
  Validate: {
    screen: ValidationScreen,
    path: '/auth/validate',
    navigationOptions: { header: null }
  }
})

const AuthNavigator = TabNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: { tabBarVisible: false }
  },
  Auth: {
    screen: AuthPath,
    navigationOptions: { tabBarVisible: false }
  }
},
{
  lazy: true
});

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: {
      header: null
    }
  },
  RoutineChooser: {
    screen: RoutineChooserScreen,
    path: '/routine/routine_chooser',
    navigationOptions: ({navigation}) =>({
      title: 'Select Routine',
      headerTitleStyle: {fontFamily: Fonts.type.bold},
      headerLeft: (
        <Button
          transparent
          leftIcon={{name: 'arrow-back', color: Colors.gong, size: 30}} 
          onPress={ () => { navigation.goBack() }} />
      ),
    }),
  },
  RoutineBuilder: {
    screen: RoutineBuilderScreen,
    path: '/routine/routine_builder',
    navigationOptions: ({navigation}) =>({
      title: 'Build Routine',
      headerTitleStyle: {fontFamily: Fonts.type.bold},
      headerLeft: (
        <Button
          transparent
          leftIcon={{name: 'arrow-back', color: Colors.gong, size: 30}} 
          onPress={ () => { navigation.goBack() }} />
      ),
    })
  },
  RoutineTimer: {
    screen: RoutineTimerScreen,
    path: '/routine/routine_timer',
    navigationOptions: ({navigation}) =>({
      title: 'Routine Timer',
      headerTitleStyle: {fontFamily: Fonts.type.bold},
      headerLeft: (
        <Button
          transparent
          leftIcon={{name: 'arrow-back', color: Colors.gong, size: 30}} 
          onPress={ () => { navigation.goBack() }} />
      ),
    })
  },
  PoseViewer: {
    screen: PoseViewerScreen,
    path: '/routine/pose_viewer',
    navigationOptions: ({navigation}) =>({
      title: 'Poses',
      headerTitleStyle: {fontFamily: Fonts.type.bold},
      headerLeft: (
        <Button
          transparent
          leftIcon={{name: 'arrow-back', color: Colors.gong, size: 30}} 
          onPress={ () => { navigation.goBack() }} />
      ),
    })
  },
  PoseBuilder: {
    screen: PoseBuilderScreen,
    path: '/routine/pose_builder',
    navigationOptions: ({navigation}) =>({
      title: 'Add Pose',
      headerTitleStyle: {fontFamily: Fonts.type.bold},
      headerLeft: (
        <Button
          transparent
          leftIcon={{name: 'arrow-back', color: Colors.gong, size: 30}} 
          onPress={ () => { navigation.goBack() }} />
      ),
    }),
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
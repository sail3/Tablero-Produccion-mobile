/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

const MainView = require('./source/components/MainView');
const BoardView = require('./source/components/BoardView');
const SettingsView = require('./source/components/SettingsView');

const nativeSTN = StackNavigator({
  Home: { screen: MainView },
  Board: { screen: BoardView },
  Settings: { screen: SettingsView },
});

AppRegistry.registerComponent('nativeSTN', () => nativeSTN);

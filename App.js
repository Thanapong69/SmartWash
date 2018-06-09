import React from 'react';
import {  StyleSheet,View, Text, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/component/Login/Login.js'
import menu from './src/Menu/menu'
import Home from './src/Menu/Home'
import Wash from './src/Menu/Wash'
import Addcre from './src/Menu/Addcre'
import user from './src/Menu/user'
import Logout from './src/Menu/Logout'
import Branch1 from './src/Menu/Branch1'
import Branch2 from './src/Menu/Branch2'
import Unit1_1 from './src/Menu/Unit1_1'
import Unit1_2 from './src/Menu/Unit1_2'
import Unit2_1 from './src/Menu/Unit2_1'
import Unit2_2 from './src/Menu/Unit2_2'
import OpenUnit1_1 from './src/Menu/OpenUnit1_1'
import OpenUnit1_2 from './src/Menu/OpenUnit1_2'
import OpenUnit2_1 from './src/Menu/OpenUnit2_1'
import OpenUnit2_2 from './src/Menu/OpenUnit2_2'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  LoginScreen: Login,
  MenuScreen: menu,
  HomeScreen: Home,
  WashScreen: Wash,
  AddcreScreen: Addcre,
  UserScreen: user,
  LogoutScreen: Logout,
  BranchScreen1: Branch1,
  BranchScreen2: Branch2,
  Unit1_1Screen: Unit1_1,
  Unit1_2Screen: Unit1_2,
  Unit2_1Screen: Unit2_1,
  Unit2_2Screen: Unit2_2,
  OpenUnit1_1Screen: OpenUnit1_1,
  OpenUnit1_2Screen: OpenUnit1_2,
  OpenUnit2_1Screen: OpenUnit2_1,
  OpenUnit2_2Screen: OpenUnit2_2,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
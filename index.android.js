/**
 * Created by letqt on 12/3/17.
 */
import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import GirlList from "./App/GirlList";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// Import the reducer and create a store
import {reducers} from './App/reducers'
const store = createStore(reducers)

const AppWithStore = () => (
  <Provider store={store}>
    <GirlList />
  </Provider>
)
AppRegistry.registerComponent('user', () => AppWithStore);
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './src/containers/App'
import { mainReducer } from './src/reducers/mainReducer'

let store = createStore(mainReducer)

export default class AlienApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AlienApp', () => AlienApp);

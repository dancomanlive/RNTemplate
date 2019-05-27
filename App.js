/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { StoreProvider } from 'easy-peasy'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import AppNavigator from './src/AppNavigator'
import store from './src/Store'

const persistor = persistStore(store)

// hot reload not working without class here
export default class App extends Component {
  render() {
    return (
      <PersistGate {...{ persistor }}>
        <StoreProvider {...{ store }}>
          <AppNavigator />
        </StoreProvider>
      </PersistGate>
    )
  }
}

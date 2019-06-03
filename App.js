/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { StoreProvider } from 'easy-peasy'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Amplify from 'aws-amplify'
import AppNavigator from './src/AppNavigator'
import store from './src/Store'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile)


const persistor = persistStore(store)
// persistor.purge()

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

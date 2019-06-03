import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import { Auth } from 'aws-amplify'
import Home from './components/Home'
import Counter from './components/Counter'
import Login from './components/Login'
import A from './components/A'
import B from './components/B'

console.log("NAV", this.props)

const FirstStack = createStackNavigator({
  Home,
  Counter
},
{ initialRouteName: 'Home' })

const SecondStack = createStackNavigator({
  A,
  B
},
{ initialRouteName: 'A' })


const MainStack = createBottomTabNavigator({
  First: FirstStack,
  Second: SecondStack
})

const rootStack = createSwitchNavigator({
  Login,
  MainStack
},
{ initialRouteName: 'Login' })

const AppNavigator = createAppContainer(rootStack)
export default AppNavigator

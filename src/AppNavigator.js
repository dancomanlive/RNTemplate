import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Home from './components/Home'
import Counter from './components/Counter'
import Login from './components/Login'
import A from './components/A'
import B from './components/B'

const FirstStack = createStackNavigator({
  Home,
  Counter
},
{ initialRouteName: 'Home' })

const SecondStack = createStackNavigator({
  Login,
  A,
  B
},
{ initialRouteName: 'Login' })


const MainStack = createBottomTabNavigator({
  First: FirstStack,
  Second: SecondStack
})

// const rootStack = createSwitchNavigator({
//   Login,
//   MainStack
// },
// { initialRouteName: 'Login' })

const AppNavigator = createAppContainer(MainStack)
export default AppNavigator

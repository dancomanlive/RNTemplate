import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './components/Home'
import Counter from './components/Counter'

const rootStack = createStackNavigator(
  { Home, Counter },
  { initialRouteName: 'Home' }
)

const AppNavigator = createAppContainer(rootStack)
export default AppNavigator

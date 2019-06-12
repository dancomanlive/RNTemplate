import React from 'react'
import {
  TouchableOpacity, StyleSheet, Text, View
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container} testID="app-root" accessibilityLabel="app-root">
      <TouchableOpacity onPress={() => navigate('Counter')}>
        <Text style={styles.text}>Go to counter</Text>
      </TouchableOpacity>
    </View>
  )
}

Home.navigationOptions = ({ navigation }) => ({ title: 'Home screen' })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
})

export default Home

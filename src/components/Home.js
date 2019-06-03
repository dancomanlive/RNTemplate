import React from 'react'
import {
  TouchableOpacity, StyleSheet, Text, View
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

const Home = (props) => {
  console.log("propsHome", props)
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Counter')}>
        <Text>Go to counter</Text>
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
  }
})

export default Home

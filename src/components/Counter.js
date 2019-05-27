import React from 'react'
import {
  TouchableOpacity, StyleSheet, Text, View
} from 'react-native'
import { useStore, useActions } from 'easy-peasy'

const Counter = () => {
  const countValue = useStore(state => state.count.value)
  const increment = useActions(actions => actions.count.increment)
  const decrement = useActions(actions => actions.count.decrement)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => increment(1)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <Text style={[styles.text, { margin: 30 }]}>{countValue}</Text>
      <TouchableOpacity onPress={() => decrement(1)}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

Counter.navigationOptions = ({ navigation }) => ({ title: 'Counter screen' })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
})

export default Counter

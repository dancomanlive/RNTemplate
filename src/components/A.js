import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

const A = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigate('B')}
        style={styles.text}
      >
        Component A
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    // top: 30
  },
})

export default A

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

const A = (props) => {
  const { navigate } = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
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

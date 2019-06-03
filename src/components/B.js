import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from 'react-navigation-hooks'

const B = (props) => {
  const { navigate } = useNavigation()

  const signOut = () => {
    Auth.signOut()
      .then(() => navigate('Login'))
      .catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => signOut()}>Sign Out</Text>
      <Text>Component B</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default B

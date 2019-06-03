/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { Auth } from 'aws-amplify'
import { Authenticator, Loading } from 'aws-amplify-react-native'
import { useNavigation } from 'react-navigation-hooks'

const Login = (props) => {
  const { navigate } = useNavigation()
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then((user) => {
      console.log('user', user)
      navigate('MainStack')
    })
      .catch((err) => {
        console.log(err)
        setLoggedIn(false)
        // setTimeout(() => setLoggedIn(false), 500)
      })
  })

  // console.log('loggedIn', loggedIn)
  // if (loggedIn) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center' }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   )
  // }

  return (
    <Authenticator
      onStateChange={(authState) => {
        console.log('authState', authState)
        if (authState === 'signedIn') {
          navigate('MainStack')
        }
      }}
      hideDefault={loggedIn}
    />
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

export default Login


// const MyTheme = {
//   signInButtonIcon: { display: 'none' }
// }

const signUpConfig = {
  // hideAllDefaults: true,
  defaultCountryCode: '60',
  // signUpFields: [
  //   {
  //     label: 'Name',
  //     key: 'name',
  //     placeholder: 'Name',
  //     required: true,
  //     displayOrder: 1
  //   },
  //   {
  //     label: 'Email',
  //     key: 'email',
  //     required: true,
  //     placeholder: 'Email',
  //     type: 'email',
  //     displayOrder: 2,
  //   },
  //   {
  //     label: 'Password',
  //     key: 'password',
  //     required: true,
  //     placeholder: 'Password',
  //     type: 'password',
  //     displayOrder: 3,
  //   },
  // ],
}

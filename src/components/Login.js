/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Auth } from 'aws-amplify'
import { Authenticator, Loading } from 'aws-amplify-react-native'
import { useNavigation } from 'react-navigation-hooks'

const Login = () => {
  console.log("Login")
  const { navigate, replace } = useNavigation()
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    })
      .then((user) => {
        console.log('user', user)
        // navigate('MainStack')
        replace('A')
      })
      .catch((err) => {
        console.log(err)
        setLoggedIn(false)
      })
  })

  return (
    <Authenticator
      onStateChange={(authState) => {
        console.log('authState', authState)
        if (authState === 'signedIn') {
          // navigate('MainStack')
          replace('A')
        }
      }}
      hideDefault={loggedIn}
      signUpConfig={{ hiddenDefaults: ['phone_number'] }}
    />
  )
}

Login.navigationOptions = ({ navigation }) => ({ header: null })

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

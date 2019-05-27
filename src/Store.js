import { createStore } from 'easy-peasy'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import model from './Model'

const store = createStore(model, {
  reducerEnhancer: reducer => persistReducer(
    { key: 'root', storage: AsyncStorage },
    reducer
  )
})

export default store

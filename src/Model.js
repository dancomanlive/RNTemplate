import { action } from 'easy-peasy'

export default {
  count: {
    value: 0,
    increment: action((state, payload) => {
      state.value += payload
    }),
    decrement: action((state, payload) => {
      state.value -= payload
    }),
  }
}

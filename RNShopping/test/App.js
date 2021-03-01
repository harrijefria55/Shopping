import React from 'react'
import { Text } from 'react-native'
import { createStore } from 'redux'

const types = {
  INCREMENT: 'INCREMENT',
}

const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return { count: state.count + 1 }
  }
  return state
}

const initialState = { count: 0 }

const store = createStore(reducer, initialState)

store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })

 export default function App() {
  return (
    <Text style={{ fontSize: 100 }}>
      {store.getState().count}
    </Text>
  )
}

import { combineReducers } from 'redux'
import counterReducer from '../slices/counterSlice'
import walletReducer from '../slices/walletSlice'

const reducers = combineReducers({
  counter: counterReducer,
  wallet: walletReducer,
})

export default reducers

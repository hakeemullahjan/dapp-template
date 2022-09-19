import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '@redux/configureStore'
import Web3Provider from '@components/Web3Provider'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

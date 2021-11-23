import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)

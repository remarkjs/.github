import React, {StrictMode} from 'react'
import * as ReactDOM from 'react-dom'

import App from './app'

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)

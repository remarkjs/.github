import React, {StrictMode} from 'react'
import * as ReactDOM from 'react-dom'

import App from './app.jsx'

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)

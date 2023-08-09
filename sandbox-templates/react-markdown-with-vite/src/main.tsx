import React from 'react'
// eslint-disable-next-line n/file-extension-in-import
import ReactDOM from 'react-dom/client'
import App from './app.js'

ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import ReactDom from 'react-dom/client'
import React from 'react'
import App from './app.js'

ReactDom.createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.js'

ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

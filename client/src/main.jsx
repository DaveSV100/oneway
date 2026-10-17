import React from 'react'
import ReactDOM from 'react-dom/client'
// Base reset first so the site styles imported by App can override it.
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

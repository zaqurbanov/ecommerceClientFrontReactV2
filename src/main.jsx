import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  

  <Router>
    <App />
  </Router>

  
  </Provider>
)

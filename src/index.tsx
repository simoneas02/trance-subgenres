import React from 'react'
import ReactDOM from 'react-dom'

import { SubgenresProvider } from './store/context'

import App from './components/App'

import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <SubgenresProvider>
      <App />
    </SubgenresProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()

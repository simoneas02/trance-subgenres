import React from 'react'
import Figure from '../Figure'

import './app.css'
import data from '../../assets/data'

const App = () => {
  return (
    <div className="app" data-testid="app">
      <h1 className="app-title">Trance Subgenres</h1>
      <Figure src={data[0].src} alt={data[0].alt} />
    </div>
  )
}

export default App

import React from 'react'
import Card from '../Card'

import './app.css'
import dark from '../../imgs/dark-psy.jpeg'

const App = () => (
  <div className="app">
    <h1 className="app-title">Trance Subgenres</h1>
    <Card src={dark} alt="Psy dark" />
  </div>
)

export default App

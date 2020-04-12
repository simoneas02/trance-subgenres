import React from 'react'
import Figure from '../Figure'

import './app.css'
import infos from '../../assets/data'
import Button from '../Button'
import Content from '../Content'

const App = () => {
  return (
    <div className="app" data-testid="app">
      <h1 className="app-title">Trance Subgenres</h1>

      <Figure src={infos[0].src} alt={infos[0].alt} />

      <section data-testid="subgenres" className="subgenres">
        {infos.map((info) => (
          <Button key={info.id} text={info.title} />
        ))}
      </section>

      <Content content={infos[0].content} />
    </div>
  )
}

export default App

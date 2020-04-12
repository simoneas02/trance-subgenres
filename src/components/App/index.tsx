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

      <div className="main-content">
        <Content
          title={infos[0].title}
          subtitle={infos[0].subTitle}
          content={infos[0].content}
        />

        <section data-testid="bpm" className="bpm">
          <h3 className="bpm__title">BPM range:</h3>
          <span className="bpm__value">{infos[0].bpm.min}</span>
          <span className="bpm__value">{infos[0].bpm.max}</span>
        </section>
      </div>

      <section className="artist">
        <h2 className="artist__title">Notable artists:</h2>
        {infos[0].artists.map((artist) => (
          <span key={artist} className="artist__name">
            {artist}
          </span>
        ))}
      </section>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Figure from '../Figure'

import './app.css'
import infos from '../../assets/data'
import Button from '../Button'
import Content from '../Content'

const App = () => {
  const [content, setContent] = useState(0)

  const handleClickIndex = (index: number) => setContent(index)

  return (
    <div className="app" data-testid="app">
      <h1 className="app-title">Trance Subgenres</h1>

      <Figure src={infos[content].src} alt={infos[content].alt} />

      <section data-testid="subgenres" className="subgenres">
        {infos.map((info, index) => (
          <Button
            key={index}
            text={info.title}
            handleClickIndex={() => handleClickIndex(index)}
          />
        ))}
      </section>

      <div className="main-content">
        <Content
          title={infos[content].title}
          subtitle={infos[content].subTitle}
          content={infos[content].content}
        />

        <section data-testid="bpm" className="bpm">
          <h3 className="bpm__title">BPM range:</h3>
          <span data-testid="bpm-min" className="bpm__value">
            {infos[content].bpm.min}
          </span>
          <span data-testid="bpm-max" className="bpm__value">
            {infos[content].bpm.max}
          </span>
        </section>
      </div>

      <section data-testid="artist" className="artist">
        <h2 className="artist__title">Notable artists:</h2>
        {infos[content].artists.map((artist) => (
          <span key={artist} className="artist__name">
            {artist}
          </span>
        ))}
      </section>
    </div>
  )
}

export default App

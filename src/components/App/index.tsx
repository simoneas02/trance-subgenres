import React, { useContext } from 'react'

import { SubgenresContext } from '../../store/context'

import Header from '../Header'
import Figure from '../Figure'
import Subgenres from '../Subgenres'
import Content from '../Content'
import BPM from '../BPM'
import Artists from '../Artists'

import infos from '../../assets/data'
import './app.css'

const App = () => {
  const { state } = useContext(SubgenresContext)

  const { currentIndex } = state

  return (
    <div className="app" data-testid="app">
      <Header />
      <section className="figure">
        <Figure src={infos[currentIndex].src} alt={infos[currentIndex].alt} />

        <Subgenres subgenres={infos} />
      </section>

      <section className="main-content">
        <Content
          title={infos[currentIndex].title}
          subtitle={infos[currentIndex].subTitle}
          content={infos[currentIndex].content}
        />

        <BPM
          min={infos[currentIndex].bpm.min}
          max={infos[currentIndex].bpm.max}
        />

        <Artists infos={infos[currentIndex].artists} />
      </section>
    </div>
  )
}

export default App

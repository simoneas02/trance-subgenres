import React, { useReducer } from 'react'

import {
  changeSubgenresReducer,
  initialState,
} from '../../store/subgenres/reducers'

import Header from '../Header'
import Figure from '../Figure'
import Subgenres from '../Subgenres'
import Content from '../Content'
import BPM from '../BPM'
import Artists from '../Artists'

import infos from '../../assets/data'
import './app.css'
import { CHANGE_SUBGENRES } from '../../store/subgenres/types'

const App = () => {
  const [state, dispatch] = useReducer(changeSubgenresReducer, initialState)

  const { currentIndex } = state

  const handleClickIndex = (index: number) =>
    dispatch({ type: CHANGE_SUBGENRES, payload: { currentIndex: index } })

  return (
    <div className="app" data-testid="app">
      <Header />
      <section className="figure">
        <Figure src={infos[currentIndex].src} alt={infos[currentIndex].alt} />

        <Subgenres
          subgenres={infos}
          handleClickIndex={(index) => handleClickIndex(index)}
        />
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

import React, { useReducer } from 'react'

import {
  changeSubgenresReducer,
  initialState,
} from '../../store/subgenres/reducers'

import Button from '../Button'
import Content from '../Content'
import Figure from '../Figure'

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
      <h1 className="app-title">Trance Subgenres</h1>

      <Figure src={infos[currentIndex].src} alt={infos[currentIndex].alt} />

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
          title={infos[currentIndex].title}
          subtitle={infos[currentIndex].subTitle}
          content={infos[currentIndex].content}
        />

        <section data-testid="bpm" className="bpm">
          <h3 className="bpm__title">BPM range:</h3>
          <span data-testid="bpm-min" className="bpm__value">
            {infos[currentIndex].bpm.min}
          </span>
          <span data-testid="bpm-max" className="bpm__value">
            {infos[currentIndex].bpm.max}
          </span>
        </section>
      </div>

      <section data-testid="artist" className="artist">
        <h2 className="artist__title">Notable artists:</h2>
        {infos[currentIndex].artists.map((artist) => (
          <span key={artist} className="artist__name">
            {artist}
          </span>
        ))}
      </section>
    </div>
  )
}

export default App

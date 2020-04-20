import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import App from '.'

describe('When App start', () => {
  afterEach(cleanup)

  it('should render a App component', () => {
    const { getByTestId } = render(<App />)

    const appId = getByTestId('app')

    expect(appId).toBeInTheDocument()
  })

  it('should show up a title', () => {
    const { getByText } = render(<App />)

    const title = getByText('Trance Subgenres')

    expect(title).toBeInTheDocument()
  })

  it('should contain a Figure component', () => {
    const { getByTestId } = render(<App />)

    const figureId = getByTestId('app')

    expect(figureId).toBeInTheDocument()
  })

  it('should show up subgenres section', () => {
    const { getByTestId } = render(<App />)

    const subgenres = getByTestId('subgenres')

    expect(subgenres).toBeInTheDocument()
  })

  it('should contain a list of Buttons component', () => {
    const { getByTestId } = render(<App />)

    const buttonFullOn = getByTestId('button-Full-on')
    const buttonProg = getByTestId('button-Progressive Psy')
    const buttonDark = getByTestId('button-Dark Psy')

    expect(buttonFullOn).toBeInTheDocument()
    expect(buttonProg).toBeInTheDocument()
    expect(buttonDark).toBeInTheDocument()
  })

  it('should contain a Content component', () => {
    const { getByTestId } = render(<App />)

    const content = getByTestId('content')

    expect(content).toBeInTheDocument()
  })

  it('should show up a BPM section', () => {
    const { getByTestId } = render(<App />)

    const bpm = getByTestId('bpm')

    expect(bpm).toBeInTheDocument()
  })

  it('should show up BPM section with a title', () => {
    const { getByText } = render(<App />)

    const title = getByText('BPM range:')

    expect(title).toBeInTheDocument()
  })

  describe('When a button is bumped', () => {
    describe('The Figure', () => {
      it('should change the image', () => {
        const { getByTestId } = render(<App />)

        const image = getByTestId('figure-img')

        expect(image.getAttribute('src')).toBe('goa-fullon.jpg')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(image.getAttribute('src')).toBe('progresive-psy.jpg')
      })
    })

    describe('The Content', () => {
      it('should change the title', () => {
        const { getByTestId } = render(<App />)

        const title = getByTestId('content-title')

        expect(title.textContent).toBe('Full-on')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(title.textContent).toBe('Progressive Psy')
      })

      it('should change the subtitle', () => {
        const { getByTestId } = render(<App />)

        const subtitle = getByTestId('content-subtitle')

        expect(subtitle.textContent).toBe(
          'Also known as: Morning Fullon, Israeli Full-on'
        )

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(subtitle.textContent).toBe(
          'Also known as: Psy-Prog, Progressive'
        )
      })

      it('should change the text', () => {
        const { getByTestId } = render(<App />)

        const text = getByTestId('content-text')

        expect(text.textContent).toBe(
          'Full-on is a dynamic, playful, and musical subgenre of Psytrance that appeals to a broader audience because of its positive vibe. Unlike of a typical straight Psytrance bassline pattern, the Full-on basssline plays on various notes across few octaves, creating a special rhythm and melody that way. The period of 2004–2009 is considered as the “golden age” of Full-on, before Progressive Psy took over the global Psy scene.'
        )

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(text.textContent).toBe(
          'Emerging in the mid 00’s in Europe, Progressive Psy has quickly expanded to become one of the most common Psytrance subgenre. And it’s very diverse too, featuring a quite wide range of vibes. Progressive Psy doesn’t utilise one particular type of sound, but rather focuses on the groove, the flow, and how it progresses over time.'
        )
      })
    })

    describe('The BPM Range', () => {
      it('should change the min and max value', () => {
        const { getByTestId } = render(<App />)

        const bpmMin = getByTestId('bpm-min')
        const bpmMax = getByTestId('bpm-max')

        expect(bpmMin.textContent).toBe('140')
        expect(bpmMax.textContent).toBe('148')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(bpmMin.textContent).toBe('134')
        expect(bpmMax.textContent).toBe('138')
      })
    })

    describe('The Notable artists:', () => {
      it('should change the artists value', () => {
        const { getByTestId } = render(<App />)

        const artists = getByTestId('artist')

        expect(artists.lastChild).toHaveTextContent('Wizzy Noise')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(artists.lastChild).toHaveTextContent('Zyce')
      })
    })
  })
})

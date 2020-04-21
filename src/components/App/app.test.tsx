import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { SubgenresProvider } from '../../store/subgenres/context'

import App from '.'

describe('Given App starts', () => {
  afterEach(cleanup)

  it('then App should be rendered', () => {
    const { getByTestId } = render(<App />)

    const appId = getByTestId('app')

    expect(appId).toBeInTheDocument()
  })

  it('should contain a Header with a title', () => {
    const { getByTestId } = render(<App />)

    const headerId = getByTestId('header')
    const headerTitleId = getByTestId('header-title')

    expect(headerId).toBeInTheDocument()
    expect(headerTitleId).toBeInTheDocument()
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

  it('should contain a Subgenres component', () => {
    const { getByTestId } = render(<App />)

    const subgenres = getByTestId('subgenres')

    expect(subgenres).toBeInTheDocument()
  })

  it('should contain a Content component', () => {
    const { getByTestId } = render(<App />)

    const content = getByTestId('content')

    expect(content).toBeInTheDocument()
  })

  it('should contain a BPM component with a title', () => {
    const { getByTestId } = render(<App />)

    const bpm = getByTestId('bpm')
    const title = getByTestId('bpm-title')

    expect(bpm).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it('should contain a Artists component with a title', () => {
    const { getByTestId } = render(<App />)

    const artists = getByTestId('artists')
    const title = getByTestId('artists-title')

    expect(artists).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  describe('When a button is bumped', () => {
    afterEach(cleanup)
    describe('The Figure', () => {
      it('should change the image', () => {
        const { getByTestId } = render(
          <SubgenresProvider>
            <App />
          </SubgenresProvider>
        )

        const image = getByTestId('figure-img')

        expect(image.getAttribute('src')).toBe('goa-fullon.jpg')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(image.getAttribute('src')).toBe('progresive-psy.jpg')
      })
    })

    describe('The Content', () => {
      it('should change the title', () => {
        const { getByTestId } = render(
          <SubgenresProvider>
            <App />
          </SubgenresProvider>
        )

        const title = getByTestId('content-title')

        expect(title.textContent).toBe('Full-on')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(title.textContent).toBe('Progressive Psy')
      })

      it('should change the subtitle', () => {
        const { getByTestId } = render(
          <SubgenresProvider>
            <App />
          </SubgenresProvider>
        )

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
        const { getByTestId } = render(
          <SubgenresProvider>
            <App />
          </SubgenresProvider>
        )

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
        const { getByTestId } = render(
          <SubgenresProvider>
            <App />
          </SubgenresProvider>
        )

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
        const { getByTestId } = render(
          <SubgenresProvider>
            <App />
          </SubgenresProvider>
        )

        const artists = getByTestId('artists')

        expect(artists.lastChild).toHaveTextContent('Wizzy Noise')

        const buttonProg = getByTestId('button-Progressive Psy')

        fireEvent.click(buttonProg)

        expect(artists.lastChild).toHaveTextContent('Zyce')
      })
    })
  })
})

import React from 'react'
import { render, cleanup } from '@testing-library/react'

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
    const { getAllByTestId } = render(<App />)

    const button = getAllByTestId('button')

    expect(button).toHaveLength(3)
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
})

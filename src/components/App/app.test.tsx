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

    const title = getByText(/Trance Subgenres/)

    expect(title).toBeInTheDocument()
  })

  it('should contain a Figure component', () => {
    const { getByTestId } = render(<App />)

    const figureId = getByTestId('app')

    expect(figureId).toBeInTheDocument()
  })
})

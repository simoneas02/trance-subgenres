import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from '.'

describe('When App start', () => {
  afterEach(cleanup)

  it('should have a title', () => {
    const { getByText } = render(<App />)
    const title = getByText(/Trance Subgenres/)

    expect(title).toBeInTheDocument()
  })

  it('should contain a Card component', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('card-component')).toBeInTheDocument()
  })
})

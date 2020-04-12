import React from 'react'
import { render } from '@testing-library/react'
import App from '.'

describe('App', () => {
  it('should have a title when App start', () => {
    const { getByText } = render(<App />)
    const title = getByText(/Trance Subgenres/)

    expect(title).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '.'

describe('Card component', () => {
  it('should have a title', () => {
    const { getByText } = render(<Card src="some-src" alt="some-alt" />)
    const title = getByText(/The Card/)

    expect(title).toBeInTheDocument()
  })

  it('should have a image with alt prop', () => {
    const { getByTestId } = render(<Card src="some-src" alt="some-alt" />)
    const altImg = screen.getByAltText(/some-alt/)

    expect(getByTestId('card-img')).toBeInTheDocument()
    expect(altImg).toBeInTheDocument()
  })
})

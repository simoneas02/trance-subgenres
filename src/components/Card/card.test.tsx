import React from 'react'
import { render } from '@testing-library/react'
import Card from '.'

describe('Card component', () => {
  it('should have a title', () => {
    const { getByText } = render(<Card />)
    const title = getByText(/The Card/)

    expect(title).toBeInTheDocument()
  })
})

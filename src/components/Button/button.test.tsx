import React from 'react'
import { render } from '@testing-library/react'

import Button from '.'

describe('When Button show up', () => {
  it('should render with a text', () => {
    const { getByText } = render(<Button text="Some Text" />)

    const text = getByText(/Some Text/)

    expect(text).toBeInTheDocument()
  })
})

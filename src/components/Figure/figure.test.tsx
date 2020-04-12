import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Figure from '.'

describe('Figure component', () => {
  afterEach(cleanup)

  it('should show up a image', () => {
    const { getByRole } = render(<Figure src="some-src" alt="some-alt" />)

    const img = getByRole('img')

    expect(img).toBeInTheDocument()
  })

  it('should show up a image with alt prop', () => {
    const { getByAltText } = render(<Figure src="some-src" alt="some-alt" />)

    const alt = getByAltText('some-alt')

    expect(alt).toBeInTheDocument()
  })
})

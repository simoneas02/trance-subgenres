import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Header from '.'

describe('Given App starts', () => {
  afterEach(cleanup)

  it('when the Header is rendered then I can see a title', () => {
    const { getByText } = render(<Header />)

    const title = getByText('Trance Subgenres')

    expect(title).toBeInTheDocument()
  })
})

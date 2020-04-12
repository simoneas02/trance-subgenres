import React from 'react'
import { render } from '@testing-library/react'

import Content from '.'

describe('When Content component show up', () => {
  it('should render a content', () => {
    const { getByText } = render(<Content content="some content" />)

    const content = getByText(/some content/)

    expect(content).toBeInTheDocument()
  })
})

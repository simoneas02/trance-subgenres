import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Content from '.'

describe('When Content component show up', () => {
  afterEach(cleanup)

  it('should render a content', () => {
    const { getByText } = render(
      <Content
        title="some title"
        subtitle="some subtitle"
        content="some content"
      />
    )

    const content = getByText('some content')

    expect(content).toBeInTheDocument()
  })

  it('should show up a title', () => {
    const { getByText } = render(
      <Content
        title="some title"
        subtitle="some subtitle"
        content="some content"
      />
    )

    const title = getByText('some title')

    expect(title).toBeInTheDocument()
  })

  it('should show up a subtitle', () => {
    const { getByText } = render(
      <Content
        title="some title"
        subtitle="some subtitle"
        content="some content"
      />
    )

    const subtitle = getByText('Also known as: some subtitle')

    expect(subtitle).toBeInTheDocument()
  })
})

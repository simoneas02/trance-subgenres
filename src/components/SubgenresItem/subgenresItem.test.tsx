import React from 'react'
import { render, cleanup } from '@testing-library/react'
import SubgenresItem from '.'

describe('Givem SubgenresItem is rendered', () => {
  beforeEach(cleanup)

  it('should a button with a text', () => {
    const { getByText } = render(
      <SubgenresItem text="some text" handleClickIndex={() => {}} index={0} />
    )

    const text = getByText('some text')

    expect(text).toBeDefined()
    expect(text).toBeInTheDocument()
  })
})

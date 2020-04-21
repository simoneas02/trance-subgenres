import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Subgenres from '.'

const subgenres = [
  {
    title: 'some title',
  },
  {
    title: 'some other title',
  },
]

describe('Givem Subgenres is rendered', () => {
  afterEach(cleanup)

  it('should show up an Subgenres butons list', () => {
    const { getByTestId } = render(
      <Subgenres subgenres={subgenres} handleClickIndex={() => {}} />
    )

    const subgenresList = getByTestId('subgenres')
    const someButton = getByTestId('button-some title')
    const someOtherButton = getByTestId('button-some other title')

    expect(someButton).toBeDefined()
    expect(someButton).toBeInTheDocument()

    expect(someOtherButton).toBeDefined()
    expect(someOtherButton).toBeInTheDocument()

    expect(subgenresList).toBeDefined()
    expect(subgenresList.children).toHaveLength(2)
  })
})

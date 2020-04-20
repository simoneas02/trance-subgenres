import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ArtistsItem from '.'

describe('Given Artists Item is rendered', () => {
  afterEach(cleanup)
  it('should show up an artists item', () => {
    const { getByTestId } = render(<ArtistsItem artist="Some Artist" />)

    const artistsItemId = getByTestId('artists-item')

    expect(artistsItemId).toBeInTheDocument()
  })
})

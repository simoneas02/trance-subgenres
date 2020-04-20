import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Artists from '.'

describe('Given Artists is rendered', () => {
  afterEach(cleanup)
  it('should show up an artists title', () => {
    const { getByText } = render(
      <Artists infos={['Some Artist', 'Another Artist']} />
    )

    const title = getByText('Notable artists:')

    expect(title).toBeInTheDocument()
  })

  it('should show up an artists list', () => {
    const { getByTestId } = render(
      <Artists infos={['Some Artist', 'Another Artist']} />
    )

    const artistsId = getByTestId('artists')

    expect(artistsId.children).toHaveLength(2)
  })
})

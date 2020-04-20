import React from 'react'
import { render, cleanup } from '@testing-library/react'
import BPM from '.'

describe('Givem BPM is rendered', () => {
  afterEach(cleanup)

  it('should show up BPM section with a title', () => {
    const { getByText } = render(<BPM min={10} max={20} />)

    const title = getByText('BPM range:')

    expect(title).toBeInTheDocument()
  })

  it('should show up min and max BPM range', () => {
    const { getByTestId } = render(<BPM min={10} max={20} />)

    const bpmMin = getByTestId('bpm-min')
    const bpmMax = getByTestId('bpm-max')

    expect(bpmMin.textContent).toBe('10')
    expect(bpmMax.textContent).toBe('20')
  })
})

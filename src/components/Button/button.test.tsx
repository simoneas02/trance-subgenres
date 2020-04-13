import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import Button from '.'

describe('When Button show up', () => {
  afterEach(cleanup)

  it('should render with a text', () => {
    const handleClickIndexMock = jest.fn()
    const { getByText } = render(
      <Button text="Some Text" handleClickIndex={handleClickIndexMock} />
    )

    const text = getByText('Some Text')

    expect(text).toBeInTheDocument()
  })

  it('should call the handleClickIndex function', () => {
    const handleClickIndexMock = jest.fn()
    const { getByTestId } = render(
      <Button text="Some Text" handleClickIndex={handleClickIndexMock} />
    )

    const button = getByTestId('button-Some Text')

    fireEvent.click(button)

    expect(handleClickIndexMock).toHaveBeenCalled()
  })
})

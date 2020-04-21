import React from 'react'

interface ButtonProps {
  text: string
  handleClickIndex: () => void
}

const Button = ({ text, handleClickIndex }: ButtonProps) => (
  <button
    data-testid={`button-${text}`}
    className="button"
    onClick={handleClickIndex}
  >
    {text}
  </button>
)

export default Button

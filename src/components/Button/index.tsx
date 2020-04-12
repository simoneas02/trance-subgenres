import React from 'react'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => (
  <button data-testid="button" className="button">
    {text}
  </button>
)

export default Button

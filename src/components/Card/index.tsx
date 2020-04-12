import React from 'react'

interface CardProps {
  src: string
  alt: string
}

const Card = ({ src, alt }: CardProps) => (
  <div data-testid="card-component">
    <h1>The Card</h1>
    <img data-testid="card-img" src={src} alt={alt} className="card-img" />
  </div>
)

export default Card

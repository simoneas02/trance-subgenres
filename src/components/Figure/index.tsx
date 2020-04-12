import React from 'react'

interface FigureProps {
  src: string
  alt: string
}

const Figure = ({ src, alt }: FigureProps) => (
  <figure data-testid="figure">
    <img data-testid="figure-img" src={src} alt={alt} className="figure-img" />
  </figure>
)

export default Figure

import React from 'react'

interface ArtistsItemProps {
  artist: string
}
const ArtistsItem = ({ artist }: ArtistsItemProps) => (
  <li className="artists-list__item" data-testid="artists-item">
    {artist}
  </li>
)

export default ArtistsItem

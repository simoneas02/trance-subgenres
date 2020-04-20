import React from 'react'

interface ArtistsItemProp {
  artist: string
}
const ArtistsItem = ({ artist }: ArtistsItemProp) => (
  <li className="artists-list__item" data-testid="artists-item">
    {artist}
  </li>
)

export default ArtistsItem

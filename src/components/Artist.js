import { useState } from 'react'
import ArtistAlbums from '../data/ArtistAlbums.json'
import Artists from '../data/Artists.json'

function Artist(props) {
  let artistAlbums = ArtistAlbums[0].album
  // console.log(Artists[0].artists[0].strArtistBanner)

  return(
    <div>
      <img id='artist-banner' src={Artists[0].artists[0].strArtistBanner} alt='artist banner'/>
      <ul id='album-list'>
        {
          artistAlbums.map((album, index) => (
            <li key={index} className={index % 2 ? "odd-item" : "even-item"}>{album.strAlbum}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Artist
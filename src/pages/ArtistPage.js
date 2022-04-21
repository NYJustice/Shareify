import { useState } from "react"
import Artist from "../components/Artist"

function ArtistPage(props) {

  const [album, setAlbum] = useState()

  return (
    <div>
      <Artist album={album} setAlbum={setAlbum} />
    </div>
  )
}

export default ArtistPage
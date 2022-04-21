import Tracks from '../components/Tracks'
import { useState } from 'react'

function AlbumPage(props) {

  const [track, setTrack] = useState()

  return (
    <div>
      <Tracks track={track} setTrack={setTrack} />
    </div>
  )
}

export default AlbumPage
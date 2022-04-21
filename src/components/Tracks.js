import Albums from '../data/Albums.json'
import ArtistAlbums from '../data/ArtistAlbums'
import musicVideos from '../data/musicVideos'
import createLink from '../API_calls/Songwhip'
import { Link } from 'react-router-dom'

function Tracks(props) {
  let album = Albums[0]
  let albumArt = ArtistAlbums[0].album[0].strAlbumThumb
  console.log(album.track)

  const clickHandler = (evt) => {
    evt.preventDefault()
    let videoLink = musicVideos.mvids[0].strMusicVid
    let songwhipLink = createLink(videoLink)
    console.log(musicVideos.mvids[0].strMusicVid)
  }

  return(
    <div className='main'>
      <img src={albumArt} alt='album art'/>
      <ul id='track-list'>
        {
          album.track.map((track, index) => (
            <li onClick={clickHandler} key={index} className={index % 2 ? "odd-item" : "even-item"}><a href=''>{track.strTrack}</a></li>
          ))
        }
      </ul>
      <iframe id="my_iframe"></iframe>
    </div>
  )
}

export default Tracks
import { useState } from "react"
import artistInfo from '../API_calls/AudioDB/ArtistInfo'


function Navbar(props) {

  const [artist, setartist] = useState()

  const submitHandler = (evt) => {
    evt.preventDefault()
    try {
      setartist(artistInfo(evt.currentTarget[0].value))
    } catch (error) {
      alert("Error: No result")
    }
    console.log(artist)
  }

  return(
    <nav>
      <ul>
        <li id="app-name">Shareify</li>
      </ul>
      <form id="searchbar" onSubmit={submitHandler}>
        <input name="search" type='text' placeholder="Artist"></input>
        <input type='submit' value="Submit"/>
      </form>
    </nav>
  )
}

export default Navbar
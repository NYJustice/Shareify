import axios from "axios";

const albumTracks = (albumID) => {
  const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/track.php',
    params: {m: `${albumID}`},
    headers: {
      
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

export default albumTracks
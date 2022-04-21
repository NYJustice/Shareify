import axios from "axios";

const artistAlbums = (artistID) => {
  const options = {
      method: 'GET',
      url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
      params: {s: `${artistID}`},
      headers: {

      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}

export default artistAlbums
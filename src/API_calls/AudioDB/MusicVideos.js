import axios from "axios";

const musicVideos = (track) => {
  const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/mvid.php',
    params: {i: '112024'},
    headers: {

    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

export default musicVideos
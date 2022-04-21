import axios from "axios";

const artistInfo = (artist) => {
  const options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/search.php',
    params: {s: `${artist}`},
    headers: {

    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

export default artistInfo
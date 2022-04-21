import axios from "axios";

const createLink = (link) => {
  const options = {
    method: 'POST',
    url: 'https://songwhip.com/',
    params: {link: 'http://www.youtube.com/watch?v=JDe86ul6RmI'},
    headers: {'Access-Control-Allow-Origin': 'https://songwhip.com/'},
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

export default createLink
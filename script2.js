const axios = require('axios').default;

const getPeople = async(axios) => {
  let res;
  try {
    res = await axios.get('https://swapi.dev/api/people');
  } catch(err) {
    console.error(err);
  }

  return {
    count: res.data.count,
    results: res.data.results,
  };
}

getPeople(axios);

module.exports = {
  getPeople,
}
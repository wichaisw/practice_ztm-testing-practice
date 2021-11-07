const axios = require('axios').default;
const swapi = require('./script3');

// Mock Testing

// jest.mock('axios') return get,post put , etc as jest.fn();
jest.mock('axios');

const res = {
  data: {
    count: 100,
    results: [0,1,2,3,4,5]
  }
}

it('getPeople calls swapi api', () => {

  axios.get.mockResolvedValue(res);
  expect.assertions(1);

  return swapi.getPeople().then(data => {
    expect(axios.get).toBeCalledWith('https://swapi.dev/api/people');
    // expect(axios.get.mock.calls.length).toBe(3);
  });
});

it('should return 100 people count', () => {
  axios.get.mockResolvedValue(res);
  expect.assertions(1);

  return swapi.getPeople().then(data => {
    expect(data.count).toEqual(100);
  }) 
})

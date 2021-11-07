const axios = require('axios').default;
const swapi = require('./script2');

describe('getPeople', () => {

  // handle asycnhronous test with done callback
  // it('calls swapi to get people', (done) => {
  //   expect.assertions(1);
  //   swapi.getPeople().then(data => {
  //     expect(data.count).toEqual(82);
  //     done();
  //   });
  // });

   // handle asycnhronous test with promise return
  it('calls swapi to get people', () => {
    expect.assertions(2);
    return swapi.getPeople().then(data => {
      expect(data.count).toEqual(82);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
})


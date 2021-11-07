const googleSearch = require('./script');

const dbMock = [
  'dog.com',
  'disney.com',
  'hello.net',
  'dog-pic.net',
  '0123.com',
  'false.com'
]

describe('googleSearch', () => {
  it("should return empty array if there's no result", () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
  }); 
  
  it('should return a result array which has the string argument as its substring', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dog-pic.net']);
  });
  
  if('is type insensitive', () => {
    expect(googleSearch('DOG', dbMock)).toEqual(['dog.com', 'dog-pic.net']);
  })
  
  it('should work with string, number, and boolean', () => {
    expect(googleSearch(123, dbMock)).toEqual(['0123.com']);
    expect(googleSearch(false, dbMock)).toEqual(['false.com']);
  })
  
  it('should return empty array if input is null or undefined', () => {
    expect(googleSearch(null, dbMock)).toEqual([]);
    expect(googleSearch(undefined, dbMock)).toEqual([]);
  })
  
  it('should throw error if argument is not primitive types', () => {
    expect(() => googleSearch([], dbMock)).toThrow(TypeError('invalid input'));
    expect(() => googleSearch({}, dbMock)).toThrow(TypeError('invalid input'));
  });
  
  it("does not return more than 3 matches", () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })
})
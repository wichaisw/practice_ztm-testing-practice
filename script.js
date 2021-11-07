const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'random.com',
  'noodle.net',
  'cat-pics.com',
  'catdom.org',
  'catty.io'
];

const googleSearch = (searchInput, db) => {
  if(searchInput === null || searchInput === undefined) return [];
  if(typeof searchInput === 'object') throw TypeError('invalid input');
  try {
    searchInput = searchInput.toString();
  } catch(err)  {
    throw TypeError('invalid input');
  }

  searchInput.toLowerCase();

  const matches = db.filter(website => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

googleSearch('cat', googleDatabase);

module.exports = googleSearch;
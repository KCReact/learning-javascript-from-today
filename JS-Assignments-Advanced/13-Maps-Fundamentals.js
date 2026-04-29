// Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
// [['title', 'Clean Code'], ['author', 'Robert C. Martin']]
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// Set a new key in bookMap called pages, and assign it with a number 464.
bookMap.set('pages', 464);

// Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// Get the size of bookMap, and log it to the console.
console.log(bookMap.size);

// Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
if (bookMap.has('author')) console.log('The author is known');

// Take the ISBN property of the first book from the books array, 
// and log to the console characters at index 4, 6, 8 and 9. Use bracket notation to access individual characters.

console.log(books[0].ISBN[4],books[0].ISBN[6],books[0].ISBN[8],books[0].ISBN[9]);

// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". 
// Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) 
// or false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));

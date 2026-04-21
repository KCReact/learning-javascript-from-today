// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. 
// This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(books[1]));
console.log(hasExamplesInJava(books[3]));
console.log(hasExamplesInJava(books[4]));


// Some of the book objects have the onlineContent property, which is either true or false. 
// Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content

for (let book = 0; book < books.length; book++) {
  books[book].onlineContent &&
    console.log(`"${books[book].title}" provides online content`);
}

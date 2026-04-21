// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. 
// This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(books[1]));
console.log(hasExamplesInJava(books[3]));
console.log(hasExamplesInJava(books[4]));

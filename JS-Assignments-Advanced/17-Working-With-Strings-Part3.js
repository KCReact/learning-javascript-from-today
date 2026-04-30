// Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.
// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

// const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);

// Expected output:
// science
// computing
// computer science
// algorithms
// business
// operating systems
// networking
// electronics
function logBookCategories(str) {
  const categories = str.split(';');

  for (let category of categories) {
    console.log(category);
  }
}
// Now, the opposite. Each book from the books array has the keywords property.
// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, 
// and then joins them to create a single string where keywords are separated by a semicolon.

// getKeywordsAsString(books);

// Expected output 
// computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development

function getKeywordsAsString(books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(keywords)];

  return uniqueKeywords.join(';');
}

// Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, 
// and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.
// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number.
// The page number should be separated from the chapter's name with underscores (take a look at the example below).

// Use the padEnd method.


const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);

function logBookChapters(book) {
  for ([chapter, page] of book) {
    console.log(chapter.padEnd(20, '_') + page);
  }
}







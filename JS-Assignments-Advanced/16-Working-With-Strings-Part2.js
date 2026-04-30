// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, 
// but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).
// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". 
// The string may also contain trailing spaces.

function normalizeAuthorName(author) {
  author = author.trim();

  const bracketIndex = author.indexOf('(');

  if (bracketIndex !== -1) {
    author = author.slice(0, bracketIndex).trim();
  }

  const firstName = author.slice(0, author.indexOf(' '));
  const lastName = author.slice(author.indexOf(' ') + 1);

  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
}

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". 
// Assign the new string to the newBookTitle variable.

const newBookTitle = books[1].title.replace('Programs', 'Software');

// Write a function called logBookTheme that takes book's title (string), and logs to the console:
// "This book is about computers" if the title starts with the word "computer",
// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,
// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".


function logBookTheme(bookTitle) {
  const title = bookTitle.trim().toLowerCase();

  if (title.startsWith('computer')) console.log('This book is about computers');
  else if (title.includes('algorithms') && title.includes('structures'))
    console.log('This book is about algorithms and data structures');
  else if (
    title.endsWith('system') ||
    (title.endsWith('systems') && !title.includes('operating'))
  )
    console.log(
      'This book is about some systems, but definitely not about operating systems',
    );
}













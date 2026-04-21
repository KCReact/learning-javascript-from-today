// There are objects in the books array that don't have the onlineContent property at all. 
// Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (let book = 0; book < books.length; book++) {
  books[book].onlineContent ??
    console.log(`"${books[book].title}" provides no data about online content`);
}

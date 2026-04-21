// Some of the book objects from the books array are missing the edition property. 
// Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

for (let book = 0; book < books.length; book++) {
  books[book].edition ||= 1;
}



// Some of the book objects from the books array have the highlighted property, which by default is set to true. 
//Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false. 

for (let book = 0; book < books.length; book++) {
  books[book].highlighted &&= !(books[book].thirdParty.goodreads.rating < 4.2);
}

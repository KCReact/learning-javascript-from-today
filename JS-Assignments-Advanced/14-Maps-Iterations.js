// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = Object.entries(books[0]);
console.log(firstBookMap);

// Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}

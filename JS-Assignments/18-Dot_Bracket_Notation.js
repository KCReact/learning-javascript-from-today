// Dot vs. Bracket Notation﻿
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

const myCountry = {
  country: "India",
  capital: "New Delhi",
  population: 1476,
  neighbours: [
    "Nepal",
    "Bhutan",
    "Myanmmar",
    "SriLanka",
    "China",
    "Bangladesh",
    "Pakistan",
  ],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million Hindi speaking people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}`,
);

myCountry.population += 2; // increase population 2 million by dot notation
console.log(myCountry.population);
myCountry["population"] -= 2; // decrease population 2 million by bracket notation
console.log(myCountry.population);

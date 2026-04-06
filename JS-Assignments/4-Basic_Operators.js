// Basic Operators﻿
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const isIsland = false;
const country = "India";
const continent = "Asia";
let population = "1476";
let language = "Hindi";

let halfPopulation = population / 2;
halfPopulation++;
console.log(halfPopulation);

let finlandPopulation = 6;
console.log(halfPopulation > finlandPopulation);

const averagePopulation = 33;
console.log(--halfPopulation * 2 > averagePopulation);

const description =
  country +
  " is in " +
  continent +
  " , and its " +
  population +
  " million people speak " +
  language +
  " !!!";

console.log(description);

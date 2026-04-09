// Functions Calling Other Functions﻿
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}

const percIndia = describePopulation("India", 1476);
console.log(percIndia);

const percChina = describePopulation("China", 1471);
console.log(percChina);

const percUSA = describePopulation("USA", 400);
console.log(percUSA);

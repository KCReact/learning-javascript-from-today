// Function Declarations vs. Expressions﻿
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const percIndia1 = percentageOfWorld1(1476);
const percIndia2 = percentageOfWorld2(1476);

const percChina1 = percentageOfWorld1(1471);
const percChina2 = percentageOfWorld2(1471);

const percUSA1 = percentageOfWorld1(400);
const percUSA2 = percentageOfWorld2(400);

console.log(percIndia1, percChina1, percUSA1);
console.log(percIndia2, percChina2, percUSA2);

// Taking Decisions: if / else Statements﻿
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

let population = 1476;
const averagePopulation = 33;

population = 13; // First Test

population = 130; // Second Test

if (population >= averagePopulation) {
  console.log(
    `India's population is ${population - averagePopulation} million above the average`,
  );
} else {
  console.log(
    `India's population is ${averagePopulation - population} million below the average`,
  );
}

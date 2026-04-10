// Looping Arrays, Breaking and Continuing﻿
// Let's bring back the populations array from a previous assignment.

// Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

const populations = [1476, 1441, 400, 250];

const percentageWorld1 = (population) => {
  let worldPopulation = 7900;

  return (population / worldPopulation) * 100;
};

const percentages2 = [];

for (let pop = 0; pop < populations.length; pop++) {
  const perc = percentageWorld1(populations[pop]);
  percentages2.push(perc);
}

console.log(percentages2);

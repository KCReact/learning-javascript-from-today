// The while Loop﻿
// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// Reflect on what solution you like better for this task: the for loop or the while loop?

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

const percentages3 = [];

// While Loop

let country = 0;

while (country < populations.length) {
  const perc = percentageWorld1(populations[country]);
  percentages3.push(perc);
  country++;
}

console.log(percentages3);

// Object Methods﻿
// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// Call the describe method.

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

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

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million Hindi speaking people, ${this.neighbours.length} neighbours and a capital called ${this.capital}`,
    );
  },

  checkIsland: function () {
    // if (this.neighbours.length === 0) {
    //   this.isIsland = true;
    // } else {
    //   this.isIsland = false;
    // }

    this.isIsland = this.neighbours.length === 0 ? "true" : "false"; // Ternary  Operator
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

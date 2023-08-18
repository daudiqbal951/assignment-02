"use strict";
//Write a program that converts given number of days in to weeks and days
//such as 17 days = 2 weeks and 3 days
var totalDays = 17;
var days = totalDays % 7;
var weeks = Math.floor(totalDays / 7);
console.log(`The required answer is ${weeks} weeks and ${days} days`);
